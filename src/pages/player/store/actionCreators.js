import { CHANGE_CURRENT_SONG, CHANGE_PLAY_LIST, CHANGE_CURRENT_SONG_INDEX } from './constants'
import { getSongDetail } from '@/services/player'


const changeCurrentSongAction = (res) => {
  return {
    type: CHANGE_CURRENT_SONG,
    data: res
  }
}

const changePlayListAction = (playList) => {
  return {
    type: CHANGE_PLAY_LIST,
    data: playList
  }
}

const changeCurrentSongIndexAction = (index) => {
  return {
    type: CHANGE_CURRENT_SONG_INDEX,
    data: index
  }
}


export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(item => item.id === ids)

    if (songIndex > -1) { // 存在播放列表
      let song = playList[songIndex]
      dispatch(changeCurrentSongIndexAction(songIndex))
      dispatch(changeCurrentSongAction(song))
    } else {
      getSongDetail(ids).then(res => {
        const newPlayList = [...playList, res.songs[0]]
        dispatch(changeCurrentSongAction(res.songs[0]))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changePlayListAction(newPlayList))
      })
    }
  }
} 



