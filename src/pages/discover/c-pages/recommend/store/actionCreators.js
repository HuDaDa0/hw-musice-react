import { 
  CHANGE_TOP_BANNERS, 
  CHANGE_HOT_RECOMMEND, 
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING
} from './constants'

import { 
  getTopBanners, 
  getHotRecommends, 
  getNewAlbums, 
  getTopList 
} from '@/services/recommend'


const changeTopBannerAction = (res) => {
  return {
    type: CHANGE_TOP_BANNERS,
    data: res.banners
  }
}

const changeHotRecommendAction = (res) => {
  return {
    type: CHANGE_HOT_RECOMMEND,
    data: res.result
  }
}

const changeNewAlbumAction = (res) => {
  return {
    type: CHANGE_NEW_ALBUM,
    data: res.albums
  }
}

const changeUpRankingAction = (res) => {
  return {
    type: CHANGE_UP_RANKING,
    data: res.playlist
  }
}

const changeNewRankingAction = (res) => {
  return {
    type: CHANGE_NEW_RANKING,
    data: res.playlist
  }
}

const changeOriginRankingAction = (res) => {
  return {
    type: CHANGE_ORIGIN_RANKING,
    data: res.playlist
  }
}

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}


export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}


export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}


export const getTopListAction = (limit) => {
  return dispatch => {
    getTopList(limit).then(res => {
      switch (limit) {
        case 0:
          dispatch(changeNewRankingAction(res))
          break
        case 2:
          dispatch(changeOriginRankingAction(res))
          break
        case 3:
          dispatch(changeUpRankingAction(res))
          break
        default:
          return
      }
    })
  }
}







