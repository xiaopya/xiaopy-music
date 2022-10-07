import React, {useEffect} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from 'umi';
import {
    dispatchGetBannerListsHandler,
    dispatchGetPersonalizedHandler,
    dispatchGetPersonalizedNewSongHandler
} from './dispatch';
import CarouselUi from '@/components/Carousel';
import PlaylistUi from '@/components/Playlist';

const Music = () => {

    const dispatch = useDispatch();

    const {bannerList, personalizedList} = useSelector(state => state.music);

    useEffect(() => {
        dispatchGetBannerListsHandler(dispatch, {});
        dispatchGetPersonalizedNewSongHandler(dispatch, {limit: 14})
        dispatchGetPersonalizedHandler(dispatch, {limit: 14,})
    }, [])


    return (
        <div className={classNames({
            'mainPadding': true,
        })}>
            <CarouselUi imageSrc={bannerList}/>
            <div>
                <p>推荐歌单</p>
                <PlaylistUi list={personalizedList}/>
            </div>
        </div>
    )
}

export default Music;