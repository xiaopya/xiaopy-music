import React, { memo, useState } from 'react'
import { Avatar, Comment, Grid, Image, Space, Tag, Typography } from '@arco-design/web-react'
import { commentPlaylist, playListDetail, songList } from '@/servers'
import { promptError, promptInfo } from '@/utils/notification'
import { DrawerUi } from '@/components/DrawerUi'
import classNames from 'classnames'
import StopCircle from '@/static/stop-circle-line'
import PlayCircle from '@/static/play-circle-line'
import hotSvg from '@/images/hot.svg'
import './playlist.less'

const Row = Grid.Row

interface playListType {
    id: number
    name: string
    picUrl?: string
    pshut?: boolean
}

interface reqType {
    code: number
    hotComments: object[]
    comments: object[]
    playlist: object[]
}

interface stateType {
    playListId: undefined | number
    playList: object[]
    comment: object[]
    listName: string | undefined
    visible: boolean
    type: string
    loading: boolean
    tagId: number
}

const options = [
    {
        value: 1,
        label: '歌曲'
    },
    {
        value: 2,
        label: '评论'
    }
]

const PlaylistUi = memo(({ list }) => {
    const ap = window.ap
    const HS = window.HS

    const [state, setState] = useState<stateType>({
        playListId: undefined,
        playList: [],
        comment: [],
        listName: undefined,
        visible: false,
        type: 'music',
        loading: false,
        tagId: 1
    })

    const InitializingData = async (value: number) => {
        try {
            setState((s) => ({
                ...s,
                loading: true
            }))
            const result = (await playListDetail({
                id: value
            })) as reqType
            if (result.code === 200) {
                console.log(result)
                result.playlist.tracks?.map((v) => {
                    v.pshut = false
                })
                setState((s) => ({
                    ...s,
                    playList: result.playlist.tracks,
                    comment: [],
                    type: 'music',
                    loading: false
                }))
            }
            return result
        } catch (err) {
            console.log('歌单详情：', err)
        }
    }

    const handlerComment = async () => {
        try {
            setState((s) => ({
                ...s,
                loading: true
            }))
            const result = (await commentPlaylist({
                id: state.playListId
            })) as reqType
            if (result.code === 200) {
                setState((s) => ({
                    ...s,
                    playList: [],
                    comment: [...result.hotComments, ...result.comments],
                    type: 'comment',
                    loading: false
                }))
            }
            return result
        } catch (err) {
            console.log('评论：', err)
        }
    }

    const clickListHandler = async (val) => {
        try {
            const songs = await songList({
                id: val.val.id
            })
            if (songs.code === 200) {
                const { picUrl, name, id } = val.val.al
                const songArrs = songs.data

                const tempIds = ap.list.audios.map((v) => v.id)
                if (!tempIds.includes(id)) {
                    for (let i = 0; i < songArrs.length; i++) {
                        ap.list.add([
                            {
                                name: name,
                                url: songArrs[i].url,
                                cover: picUrl,
                                id
                            }
                        ])
                    }
                } else {
                    promptInfo('已经添加过该歌曲了')
                }
                HS.show()
            } else {
                promptError('添加失败')
            }

            state.playList.filter((v) => v.id !== val.id).map((fval) => (fval.pshut = false))

            val.pshut = !val.pshut
            setState((s) => ({
                ...s,
                playList: state.playList
            }))
        } catch (err) {
            console.log(err)
        }
    }

    const onOk = (val) => {
        console.log(val, 'val.')
    }

    const onCancel = () => {
        setState((s) => ({ ...s, visible: false, comment: [], tagId: 1 }))
    }

    const handlerOptions = async (val: { value: number }) => {
        const { value } = val
        // 处理tag选中
        setState((ss) => ({
            ...ss,
            tagId: value
        }))

        // 歌曲
        if (value === 1) {
            InitializingData(state?.playListId)
        }
        // 评论
        if (value === 2) {
            handlerComment()
        }
    }

    const renderConfig = {
        music: state.playList?.map((val: any) => {
            const name = val?.ar?.map((res: { name: any })=>res.name).join("/");
            return (
                <li key={val.id}>
                    <div onClick={() => clickListHandler({ val: val })}>
                        <p
                            className={classNames({
                                'apply-shake': val.pshut,
                                'music-display': true
                            })}
                        >
                            <Typography.Text mark>{"{"}{name}{"}"}</Typography.Text>
                            <span>{val.name}</span>
                        </p>
                        <p>{val.pshut ? <StopCircle /> : <PlayCircle />}</p>
                    </div>
                </li>
            )
        }),
        comment: state.comment?.map((val: any, idx: number) => (
            <Comment
                key={val.commentId}
                author={
                    <Space>
                        {idx < 10 && <Image width={15} src={hotSvg} />}
                        {val.user.nickname}
                    </Space>
                }
                avatar={
                    <Avatar>
                        <img alt="avatar" src={val.user.avatarUrl} />
                    </Avatar>
                }
                content={<div>{val.content}</div>}
                datetime={val.timeStr}
                actions={[
                    <div style={{ fontSize: '12px' }}>
                        {val.ipLocation.location == '' ? '' : `--来自${val.ipLocation.location}`}
                    </div>
                ]}
            />
        ))
    }

    const { comment, listName, visible, loading, type, tagId } = state
    return (
        <>
            <Row className="grid-gutter-demo">
                {list.map((listval: playListType) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap'
                        }}
                        key={listval.id}
                        onClick={() => {
                            setState((s) => ({
                                ...s,
                                visible: true,
                                playListId: listval.id,
                                listName: listval.name
                            }))
                            InitializingData(listval.id).then(() => Promise.resolve())
                        }}
                    >
                        <div
                            style={{
                                padding: '10px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                        >
                            <Image
                                width={150}
                                style={{
                                    borderRadius: '6px'
                                }}
                                preview={false}
                                src={listval.picUrl}
                                title={listval.name}
                                footerPosition="outer"
                                alt="lamp"
                            />
                        </div>
                    </div>
                ))}
            </Row>
            <DrawerUi
                width={`${comment.length ? 50 : 30}%`}
                title={
                    <span
                        className={classNames({
                            spanColor: true
                        })}
                    >
                        {'{'}
                        {listName}
                        {'}'}
                    </span>
                }
                visible={visible}
                loading={loading}
                content={
                    <>
                        <Space>
                            {options?.map((v) => (
                                <Tag
                                    className="tag"
                                    color={v.value == tagId ? 'arcoblue' : ''}
                                    key={v.value}
                                    onClick={() => handlerOptions(v)}
                                >
                                    {v.label}
                                </Tag>
                            ))}
                        </Space>
                        <ul
                            className={classNames({
                                ulBlock: true
                            })}
                        >
                            {renderConfig[type]}
                        </ul>
                    </>
                }
                onCancel={onCancel}
                onOk={onOk}
            />
        </>
    )
})

export default PlaylistUi
