import { 
  CHANGE_CURRENT_SONG, 
  CHANGE_PLAY_LIST, 
  CHANGE_CURRENT_SONG_INDEX, 
  CHANGE_SEQUENCE 
} from './constants'
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

export const changeSequence = (index) => {
  return {
    type: CHANGE_SEQUENCE,
    data: index
  }
}

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const sequence = getState().getIn(['player', 'sequence'])

    // sequence  0 顺序    1 随机   2 单曲   
    switch (sequence) {
      case 1:
        let randomIndex = Math.floor(Math.random() * playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = Math.floor(Math.random() * playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
        if (currentSongIndex > playList.length - 1) currentSongIndex = 0
    }

    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeCurrentSongAction(playList[currentSongIndex]))
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
        let song = res.songs[0]
        if (!song) return 
        const newPlayList = [...playList, song]
        dispatch(changeCurrentSongAction(song))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changePlayListAction(newPlayList))
      })
    }
  }
} 



