export const musicLocalUrl = "//localhost:3000";
// export const musicLocalUrl = "//cloudmusic-sable.vercel.app";
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
    }
};