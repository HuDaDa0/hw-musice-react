import { Map  } from 'immutable'

import { CHANGE_TOP_BANNERS } from './constants'

const defaultState = Map({
  topBanners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.data)
    default:
      return state
  }
}


export default reducer