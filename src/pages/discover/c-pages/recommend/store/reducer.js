import { Map  } from 'immutable'

import { 
  CHANGE_TOP_BANNERS, 
  CHANGE_HOT_RECOMMEND, 
  CHANGE_NEW_ALBUM, 
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING
} from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],
  upRanking: {},
  newRanking: {},
  originRanking: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.data)
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.data)
    case CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.data)
    case CHANGE_UP_RANKING:
      return state.set('upRanking', action.data)
    case CHANGE_NEW_RANKING:
      return state.set('newRanking', action.data)
    case CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.data)
    default:
      return state
  }
}


export default reducer