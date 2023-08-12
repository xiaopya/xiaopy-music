import {isProduction} from '@/utils'

const env = isProduction();

/**
 * 由于没有自己的服务器去承载，所以线上用别人的😁
 * 么么么么哒😘😍😘😍😘😍😘😍😘😍😘😍
 * 么么么么哒😘😍😘😍😘😍😘😍😘😍😘😍
 * 么么么么哒😘😍😘😍😘😍😘😍😘😍😘😍
 */
const musicLocalUrl = env ? "//cloudmusic-sable.vercel.app" : "//localhost:3000";

export const Api = {
    MUSIC: {

        /**
         * 全局搜索
         * 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
         * 必选参数 : keywords : 关键词
         * 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
         * type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
         * 接口地址 : /search 或者 /cloudsearch(更全)
         * @returns
         */
        MUSIC_SEARCH: `${musicLocalUrl}/cloudsearch`,


        /**
         * 轮播图
         * 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
         * 可选参数 : type:资源类型,对应以下类型,默认为 0 即 PC
         * @returns
         */
        MUSIC_BANNER: `${musicLocalUrl}/banner`,


        /**
         * 推荐新音乐
         * 说明 : 调用此接口 , 可获取推荐新音乐
         * 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
         * @returns
         */
        MUSIC_PERSONALIZED_NEWSONG: `${musicLocalUrl}/personalized/newsong`,


        /**
         * 推荐歌单
         * 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
         * @returns
         */
        MUSIC_PERSONALIZED: `${musicLocalUrl}/personalized`,


        /**
         * 获取歌单详情
         * 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
         * 必选参数 : id : 歌单 id
         * 可选参数 : s : 歌单最近的 s 个收藏者,默认为 8
         * @param params
         */
        MUSIC_PLAYLIST_DETAIL: `${musicLocalUrl}/playlist/detail`,

        /**
         * 获取歌单所有歌曲
         * 说明 : 由于网易云接口限制，歌单详情只会提供 10 首歌，通过调用此接口，传入对应的歌单id，即可获得对应的所有歌曲
         * 必选参数 : id : 歌单 id
         * 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
         * 可选参数 : offset : 默认值为0
         * @param params
         */
        MUSIC_TRACK_ALL: `${musicLocalUrl}/playlist/track/all`,

        /**
         * 歌单详情动态
         * 说明 : 调用后可获取歌单详情动态部分,如评论数,是否收藏,播放数
         * 必选参数 : id : 歌单 id
         * @param params
         */
        MUSIC_DETAIL_dynamic: `${musicLocalUrl}/playlist/detail/dynamic`,


        /**
         * 歌单评论
         * 说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )
         * 必选参数 : id: 歌单 id
         * 可选参数 : limit: 取出评论数量 , 默认为 20
         */
        MUSIC_COMMENT_PLAYLIST: `${musicLocalUrl}/comment/playlist`,


        /**
         * 获取音乐 url
         * 说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
         * 注 : 部分用户反馈获取的 url 会 403,将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
         * 必选参数 : id : 音乐 id
         * 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
         */
        MUSIC_SONG_LIST: `${musicLocalUrl}/song/url`,
    }
};