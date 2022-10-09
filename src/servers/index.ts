import {Api} from "@/api";
import {Http} from "@/utils/fetch";

/**
 * 轮播图
 * @returns
 */
export async function bannerLists() {
    const res = await Http.get(Api.MUSIC.MUSIC_BANNER);
    return res;
}

/**
 * 推荐新音乐
 * @returns
 */
export async function personalizedNewSong(params) {
    const res = await Http.get(Api.MUSIC.MUSIC_PERSONALIZED_NEWSONG, params);
    return res;
}

/**
 * 推荐歌单
 * @returns
 */
export async function personalized(params) {
    const res = await Http.get(Api.MUSIC.MUSIC_PERSONALIZED, params);
    return res;
}

/**
 * 歌单详情
 * @param params
 */
export async function playListDetail(params) {
    const res = await Http.get(Api.MUSIC.MUSIC_PLAYLIST_DETAIL, params);
    return res;
}
