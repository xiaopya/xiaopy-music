import 'aplayer/dist/APlayer.min.css';
import {useEffect, useRef, useState} from "react";
import APlayer from "aplayer";
import {sessionCache} from '@/utils/loaclStorage';
import qs from 'qs';

/**
 * 插件文档：https://aplayer.js.org/#/zh-Hans/?id=%E5%AE%89%E8%A3%85
 * @constructor
 */
const MusicPlayer = () => {
    const sessSonglist = sessionCache.getItem("song_list");
    const currSongList = sessSonglist ? qs.parse(sessSonglist) : [];
    console.log(currSongList, sessSonglist)
    const onRef = useRef();
    const [state, setState] = useState({
        hs: !!currSongList?.length,
    });

    window.HS = {
        show() {
            // 存歌曲
            const songList = window.ap.list.audios;
            if (songList?.length) {
                console.log(qs.stringify(songList))
                sessionCache.setItem("song_list", qs.stringify(songList));
            }
            setState({
                hs: true
            })
        },
        hide() {
            setState({
                hs: false
            })
        },
    }

    /**
     * 存本地，防止页面刷新丢失添加的歌曲
     */
    useEffect(() => {
        if (window.ap) {

        }
    }, [])

    useEffect(() => {
        window.ap = new APlayer({
            container: onRef.current,
            autoplay: false,
            theme: '#FADFA3',
            loop: 'all',
            order: 'random',
            preload: 'auto',
            volume: 0.7,
            mutex: true,
            listFolded: false,
            listMaxHeight: 90,
            lrcType: 3,
            fixed: true,
            audio: currSongList,
        });
        ap.lrc.show()
    }, [])

    return (
        <div className="music_player" style={{display: state.hs ? '' : 'none',}}>
            <div ref={onRef}/>
        </div>
    )
}

export default MusicPlayer;