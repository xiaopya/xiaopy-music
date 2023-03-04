import {isProduction} from '@/utils'

const env = isProduction();

// 由于没有自己的服务器去承载，所以线上用别人的😁
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
        /* 歌单详情动态 */
        MUSIC_DETAIL_dynamic: `${musicLocalUrl}/playlist/detail/dynamic`,
        /* 歌单评论 */
        MUSIC_COMMENT_PLAYLIST: `${musicLocalUrl}/comment/playlist`,
    }
};