import React, {memo, useState} from 'react';
import {Avatar, Comment, Grid, Image, Space, Tag} from '@arco-design/web-react';
import {commentPlaylist, playListDetail} from '@/servers';
import './playlist.less'
import {DrawerUi} from "@/components/DrawerUi";
import classNames from "classnames";
import StopCircle from '@/static/stop-circle-line'
import PlayCircle from '@/static/play-circle-line'

const Row = Grid.Row;

interface playListType {
    id: number;
    name: string,
    picUrl?: string,
    pshut?: boolean,
}

const options = [
    {
        value: 1,
        label: "歌曲",
    },
    {
        value: 2,
        label: "评论",
    }
]


const PlaylistUi = memo(({list, palyRef}) => {

    const [state, setState] = useState<any>({
        playListId: undefined,
        playList: [],
        comment: [],
        listName: undefined,
        visible: false,
        type: 'music',
    });

    const InitializingData = async (value) => {
        try {
            const res = await playListDetail({
                id: value,
            })
            if (res.code === 200) {
                res.playlist.tracks?.map(v => {
                    v.pshut = false;
                })
                setState((s) => ({
                    ...s,
                    playList: res.playlist.tracks,
                    comment: [],
                    type: "music",
                }))
            }
        } catch (err) {
            console.log("歌单详情：", err);
        }
    }


    const clickListHandler = (val) => {
        state.playList.filter(v => v.id !== val.id).map(fval => fval.pshut = false)

        val.pshut = !val.pshut;

        setState((s) => ({
            ...s,
            playList: state.playList
        }))
    }

    const onOk = (val) => {
        console.log(val, 'val.')
    }

    const onCancel = () => {
        setState((s) => ({...s, visible: false, comment: [],}))
    }

    const handlerOptions = async (value) => {
        if (value.value === 1) {
            InitializingData(state.playListId);
        }
        // 评论
        if (value.value === 2) {
            try {
                const result = await commentPlaylist({
                    id: state.playListId,
                })
                if (result.code === 200) {
                    setState((s) => ({
                        ...s,
                        playList: [],
                        comment: [...result.hotComments, ...result.comments],
                        type: "comment",
                    }))
                }
            } catch (err) {
                console.log("评论：", err);
            }
        }

    }

    const renderConfig = {
        "music": (
            <ul className={classNames({
                'ulBlock': true,
            })}>
                {
                    state.playList?.map((val: playListType) => (
                        <li>
                            <div onClick={() => clickListHandler(val)}>
                                <p className={classNames({
                                    "apply-shake": val.pshut
                                })}>{val.name}</p>
                                <p>
                                    {
                                        val.pshut ? <StopCircle/> : <PlayCircle/>
                                    }
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        ),
        "comment": (
            <ul className={classNames({
                'ulBlock': true,
            })}>
                {
                    state.comment?.map((val: any) => (
                        <Comment
                            key={val.commentId}
                            author={val.user.nickname}
                            avatar={
                                <Avatar>
                                    <img
                                        alt='avatar'
                                        src={val.user.avatarUrl}
                                    />
                                </Avatar>
                            }
                            content={<div>{val.content}</div>}
                            datetime={val.timeStr}
                            actions={[<div
                                style={{fontSize: '12px',}}>{val.ipLocation.location == '' ? "" : `--来自${val.ipLocation.location}`}</div>]}
                        />
                    ))
                }
            </ul>
        ),
    }

    // useEffect(() => {
    //     InitializingData();
    // }, [state.playListId])


    return (
        <>
            <Row className='grid-gutter-demo'>
                {
                    list.map((listval: playListType) => (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}
                             key={listval.id}

                             onClick={() => {
                                 // @ts-ignore
                                 setState((s) => ({
                                     ...s,
                                     visible: true,
                                     playListId: listval.id,
                                     listName: listval.name,
                                 }))
                                 InitializingData(listval.id);
                             }}
                        >
                            <div style={{
                                padding: '10px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                            }}>
                                <Image
                                    width={150}
                                    style={{
                                        borderRadius: '6px',
                                    }}
                                    preview={false}
                                    src={listval.picUrl}
                                    title={listval.name}
                                    footerPosition='outer'
                                    alt='lamp'
                                />
                            </div>
                        </div>
                    ))
                }
            </Row>
            <DrawerUi
                width={`${state.comment.length ? 50 : 30}%`}
                title={
                    <span className={classNames({
                        spanColor: true
                    })}>
                    {"{"}{state.listName}{"}"}
                    </span>
                }
                visible={state.visible}
                content={
                    <div>
                        <Space>
                            {
                                options?.map(v => (
                                    <Tag key={v.value} onClick={() => handlerOptions(v)}>{v.label}</Tag>
                                ))
                            }
                        </Space>
                        {renderConfig[state.type]}
                    </div>
                }
                onCancel={onCancel}
                onOk={onOk}
            />
        </>
    )
})

export default PlaylistUi;