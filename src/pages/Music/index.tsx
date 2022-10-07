import React, {useEffect, useState} from 'react';
import classNames from "classnames";
// import {useDispatch, useSelector} from 'umi';
// import {
//     dispatchGetBannerListsHandler,
//     dispatchGetPersonalizedHandler,
//     dispatchGetPersonalizedNewSongHandler
// } from './dispatch';
import CarouselUi from '@/components/Carousel';
import PlaylistUi from '@/components/Playlist';

import {bannerLists, personalized} from '@/servers';


const Music = () => {
    // const dispatch = useDispatch();
    // const {bannerList, personalizedList} = useSelector(state => state.music);

    const [state, setState] = useState({
        bannerList: [],
        personalizedList: [],
    });

    async function f() {
        const s = await bannerLists();
        // const ss = await personalizedNewSong({
        //     limit: 14,
        // });
        const sss = await personalized({
            limit: 14,
        });
        setState({bannerList: s.banners, personalizedList: sss.result,})
    }

    useEffect(() => {
        // dispatchGetBannerListsHandler(dispatch, {});
        // dispatchGetPersonalizedNewSongHandler(dispatch, {limit: 14})
        // dispatchGetPersonalizedHandler(dispatch, {limit: 14,})
        f()
    }, [])


    return (
        <div className={classNames({
            'mainPadding': true,
        })}>
            <CarouselUi imageSrc={state.bannerList}/>
            <div>
                <p>推荐歌单</p>
                <PlaylistUi list={state.personalizedList}/>
            </div>
        </div>
    )
}

export default Music;