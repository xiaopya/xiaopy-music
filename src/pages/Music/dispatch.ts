export function dispatchGetBannerListsHandler(dispatch:any, payload: any) {
    dispatch({
        type: 'music/getBannerListsHandler',
        payload,
    })
}

export function dispatchGetPersonalizedNewSongHandler(dispatch:any, payload = {limit: 8}) {
    dispatch({
        type: 'music/getPersonalizedNewSongHandler',
        payload,
    })
}

export function dispatchGetPersonalizedHandler(dispatch:any, payload: any) {
    dispatch({
        type: 'music/getPersonalizedHandler',
        payload
    })
}