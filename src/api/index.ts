import {isProduction} from '@/utils'

const env = isProduction();

const musicLocalUrl = env ? "//cloudmusic-sable.vercel.app" : "//localhost:3000";

export const Api = {
    MUSIC: {
        /* 轮播图 */
        MUSIC_BANNER: `${musicLocalUrl}/banner`,

        /* 推荐新音乐 */
        MUSIC_PERSONALIZED_NEWSONG: `${musicLocalUrl}/personalized/newsong`,

        /* 推荐歌单 不需要登陆 */
        MUSIC_PERSONALIZED: `${musicLocalUrl}/personalized`,


        /* 歌单详情 */
        MUSIC_PLAYLIST_DETAIL: `${musicLocalUrl}/playlist/detail`,

        /* 歌单所有歌曲 */
        MUSIC_TRACK_ALL: `${musicLocalUrl}/playlist/track/all`,
    }
};