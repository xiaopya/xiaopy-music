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

    const [state, setState] = useState({
        loading: false,
        bannerList: [],
        personalizedList: [],
        hideText: true,
    });

    async function InitializingData() {
        const bl = await bannerLists();
        // const ss = await personalizedNewSong({
        //     limit: 14,
        // });
        const ps = await personalized({
            limit: 14,
        });

        Promise.all([bl, ps]).then(() => {
            return setState((ss)=>({ ...ss,loading: true, bannerList: bl.banners, personalizedList: ps?.result, }));
        })

    }

    useEffect(() => {
        // dispatchGetBannerListsHandler(dispatch, {});
        // dispatchGetPersonalizedNewSongHandler(dispatch, {limit: 14})
        // dispatchGetPersonalizedHandler(dispatch, {limit: 14,})
        InitializingData();
    }, [])

    return (
        <div className={classNames({
            'mainPadding': true,
        })}>
            {!state.loading ? <LinearIndeterminate/> : (
                    <>
                        <CarouselUi imageSrc={state.bannerList}/>
                        <div>
                            <div className={classNames({
                                'vertical-class': true,
                            })}>
                                <p>推荐歌单</p>
                            </div>
                            <PlaylistUi palyRef={ref} list={state.personalizedList}/>
                        </div>
                    </>
                )}
        </div>
    )
}

export default Music;