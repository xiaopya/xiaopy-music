import React, {useEffect, useRef, useState} from 'react';
import classNames from "classnames";
// import {useDispatch, useSelector} from 'umi';
// import {
//     dispatchGetBannerListsHandler,
//     dispatchGetPersonalizedHandler,
//     dispatchGetPersonalizedNewSongHandler
// } from './dispatch';
import CarouselUi from '@/components/Carousel';
import PlaylistUi from '@/components/Playlist';
import LinearIndeterminate from '@/loading'

import {bannerLists, personalized} from '@/servers';

import './music.less'


const Music = () => {
    const ref = useRef();

    // const dispatch = useDispatch();
    // const {bannerList, personalizedList} = useSelector(state => state.music);

    const [hideText, setHideText] = useState(true);
    const [state, setState] = useState({
        loading: false,
        bannerList: [],
        personalizedList: [],
        hideText: true,
    });

    const reverseHideHandler = () => {
        setHideText(false)
    }

    async function InitializingData() {
        const s = await bannerLists();
        // const ss = await personalizedNewSong({
        //     limit: 14,
        // });
        const sss = await personalized({
            limit: 14,
        });

        Promise.all([s, sss]).then(() => {
            setState({loading: true, bannerList: s.banners, personalizedList: sss.result,})
        })

    }

    useEffect(() => {
        // dispatchGetBannerListsHandler(dispatch, {});
        // dispatchGetPersonalizedNewSongHandler(dispatch, {limit: 14})
        // dispatchGetPersonalizedHandler(dispatch, {limit: 14,})
        InitializingData().then(() => {
        });
    }, [])

    return (
        <div className={classNames({
            'mainPadding': true,
        })}>
            {
                !state.loading ? <LinearIndeterminate/> : (
                    <>
                        <CarouselUi imageSrc={state.bannerList}/>
                        <div>
                            <div className={classNames({
                                'vertical-class': true,
                            })}>
                                <p>推荐歌单</p>
                                <p className={classNames({
                                    'pHide': true,
                                    'hideText': hideText,
                                })} onClick={() => {
                                    setHideText(true);
                                    ref.current.toggle();
                                }}>返回歌单</p>
                            </div>
                            <PlaylistUi reverseHideHandler={reverseHideHandler} palyRef={ref}
                                        list={state.personalizedList}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Music;