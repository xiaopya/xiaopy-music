import React, {memo, useEffect, useState} from 'react';
import {Grid, Image} from '@arco-design/web-react';
import {playListDetail} from '@/servers';
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


const PlaylistUi = memo(({list, palyRef}) => {

    const [state, setState] = useState({
        playListId: undefined,
        playList: [],
        listName: undefined,
        visible: false,
    });

    async function InitializingData() {
        const res = await playListDetail({
            id: state.playListId,
        })
        if (res.code === 200) {

            res.playlist.tracks?.map(v => {
                v.pshut = false;
            })

            setState((s) => ({
                ...s,
                playList: res.playlist.tracks
            }))
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
        setState((s) => ({...s, visible: false}))
    }

    const content = (
        <ul className={classNames({
            'ulBlock': true,
        })}>
            {
                state.playList?.map((val: playListType) => (
                    <li key={val.id}>
                        <div>
                            <p className={classNames({
                                "apply-shake": val.pshut
                            })}>{val.name}</p>
                            <p onClick={() => clickListHandler(val)}>
                                {
                                    val.pshut ? <StopCircle/> : <PlayCircle/>
                                }
                            </p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )


    useEffect(() => {

        InitializingData();

    }, [state.playListId])

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
                                 setState((s) => ({
                                     ...s,
                                     visible: true,
                                     playListId: listval.id,
                                     listName: listval.name,
                                 }))
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
            <DrawerUi title={state.listName} visible={state.visible} content={content} onCancel={onCancel} onOk={onOk}/>
        </>
    )
})

export default PlaylistUi;