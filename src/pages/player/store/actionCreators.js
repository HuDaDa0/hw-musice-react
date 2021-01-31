import { CHANGE_CURRENT_SONG } from './constants'
import { getSongDetail } from '@/services/player'


const changeCurrentSongAction = (res) => {
  return {
    type: CHANGE_CURRENT_SONG,
    data: res
  }
}


export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
} 



