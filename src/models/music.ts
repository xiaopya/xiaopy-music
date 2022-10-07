import {APIModel} from '@/typing/api'
import {bannerLists, personalized, personalizedNewSong} from '@/servers'
import {promptError} from "@/utils/notification";

export interface MusicModelState {
    bannerList: object[];
    newSong: object[];
    personalizedList: object[];
}

const MusicModel: APIModel.DvaModel<MusicModelState> = {
    namespace: 'music',
    state: {
        bannerList: [],
        newSong: [],
        personalizedList: [],
    },
    effects: {
        * getBannerListsHandler({payload}, {call, put}) {
            try {
                const res = yield call(bannerLists, payload);
                if (res.code === 200) {
                    yield put({type: 'getBannerLists', payload: res.banners,})
                }
            } catch (err) {
                promptError(err);
            }
        },
        * getPersonalizedNewSongHandler({payload}, {call, put}) {
            try {
                const res = yield call(personalizedNewSong, payload);
                if (res.code === 200) {
                    yield put({type: 'getPersonalizedNewSong', payload: res.result,})
                }
            } catch (err) {
                promptError(err);
            }
        },
        * getPersonalizedHandler({payload}, {call, put}) {
            try {
                const res = yield call(personalized, payload);
                if (res.code === 200) {
                    yield put({type: 'getPersonalized', payload: res.result,})
                }
            } catch (err) {
                promptError(err);
            }
        }

    },
    reducers: {
        getBannerLists(state, {payload}) {
            return {
                ...state,
                bannerList: payload,
            }
        },
        getPersonalizedNewSong(state, {payload}) {
            return {
                ...state,
                newSong: payload
            }
        },
        getPersonalized(state, {payload}) {
            return {
                ...state,
                personalizedList: payload,
            }
        }
    },
};

export default MusicModel;