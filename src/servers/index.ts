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
export async function personalizedNewSong(limit) {
    const res = await Http.get(Api.MUSIC.MUSIC_PERSONALIZED_NEWSONG, limit);
    return res;
}

/**
 * 推荐歌单
 * @returns
 */
export async function personalized(limit) {
    const res = await Http.get(Api.MUSIC.MUSIC_PERSONALIZED, limit);
    return res;
}
