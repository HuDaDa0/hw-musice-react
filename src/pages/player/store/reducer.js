import { Map } from 'immutable'

import { CHANGE_CURRENT_SONG, CHANGE_PLAY_LIST, CHANGE_CURRENT_SONG_INDEX } from './constants'


const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.data)
    case CHANGE_PLAY_LIST:
      return state.set('playList', action.data)
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.data)
    default:
      return state
  }
}


export default reducer
