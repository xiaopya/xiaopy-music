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

export async function commentPlaylist(params) {
    return await Http.get(Api.MUSIC.MUSIC_COMMENT_PLAYLIST, params)
}



