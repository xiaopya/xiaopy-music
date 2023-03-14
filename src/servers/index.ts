import {Api} from "@/api";
import {Http} from "@/utils/fetch";

/**
 * 轮播图
 * 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
 * @returns
 */
export async function bannerLists() {
    return await Http.get(Api.MUSIC.MUSIC_BANNER);
}

/**
 * 推荐新音乐
 * 说明 : 调用此接口 , 可获取推荐新音乐
 * @returns
 */
export async function personalizedNewSong(params) {
    return await Http.get(Api.MUSIC.MUSIC_PERSONALIZED_NEWSONG, params);
}

/**
 * 推荐歌单
 * @returns
 */
export async function personalized(params) {
    return await Http.get(Api.MUSIC.MUSIC_PERSONALIZED, params);
}

/**
 * 获取歌单详情
 * 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
 * @param params
 */
export async function playListDetail(params) {
    return await Http.get(Api.MUSIC.MUSIC_PLAYLIST_DETAIL, params);
}

/**
 * 获取歌单所有歌曲
 * 说明 : 由于网易云接口限制，歌单详情只会提供 10 首歌，通过调用此接口，传入对应的歌单id，即可获得对应的所有歌曲
 * @param params
 */
export async function trackAll(params) {
    return await Http.get(Api.MUSIC.MUSIC_TRACK_ALL, params);
}

/**
 * 歌单详情动态
 * 说明 : 调用后可获取歌单详情动态部分,如评论数,是否收藏,播放数
 * @param params
 */
export async function detailDynamic(params) {
    return await Http.get(Api.MUSIC.MUSIC_DETAIL_dynamic, params);
}

/**
 * 歌单评论
 * 说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )
 */
export async function commentPlaylist(params) {
    return await Http.get(Api.MUSIC.MUSIC_COMMENT_PLAYLIST, params)
}


/**
 * 获取音乐 url
 * 说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
 * 注 : 部分用户反馈获取的 url 会 403,将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
 * 必选参数 : id : 音乐 id
 * 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 */
export async function songList(params) {
    return await Http.get(Api.MUSIC.MUSIC_SONG_LIST, params)
}



