import { Map  } from 'immutable'

import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM } from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.data)
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.data)
    case CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.data)
    default:
      return state
  }
}


export default reducer