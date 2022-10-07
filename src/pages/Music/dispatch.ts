export function dispatchGetBannerListsHandler(dispatch, payload) {
    dispatch({
        type: 'music/getBannerListsHandler',
        payload,
    })
}

export function dispatchGetPersonalizedNewSongHandler(dispatch, payload = {limit: 8}) {
    dispatch({
        type: 'music/getPersonalizedNewSongHandler',
        payload,
    })
}

export function dispatchGetPersonalizedHandler(dispatch, payload) {
    dispatch({
        type: 'music/getPersonalizedHandler',
        payload
    })
}