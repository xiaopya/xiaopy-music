import React, {memo, useEffect, useState} from 'react';
import {Grid, Image} from '@arco-design/web-react';
import Flippy, {BackSide, FrontSide} from 'react-flippy';
import StopCircle from '@/static/stop-circle-line'
import PlayCircle from '@/static/play-circle-line'
import {playListDetail} from '@/servers';
import './playlist.less'
import classNames from "classnames";

const Row = Grid.Row;

interface playListType {
    id: number;
    name: string,
    picUrl?: string,
    pshut?: boolean,
}


const PlaylistUi = memo(({list, palyRef, reverseHideHandler}) => {

    const [onOff, setOnOff] = useState({
        isInit: false,
        currentId: undefined,
    });
    const [state, setState] = useState({
        playListId: undefined,
        playList: [],
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

    useEffect(() => {

        InitializingData();

    }, [state.playListId])

    return (
        <div>
            <Flippy
                flipOnHover={false}
                flipOnClick={false}
                flipDirection="vertical"
                ref={palyRef}
            >
                <FrontSide>
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
                                         palyRef.current.toggle();
                                         reverseHideHandler()
                                         setState((s) => ({...s, playListId: listval.id,}))
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
                </FrontSide>
                <BackSide>
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
                </BackSide>
            </Flippy>
        </div>
    )
})

export default PlaylistUi;