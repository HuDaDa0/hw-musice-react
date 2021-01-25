import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM } from './constants'
import { getTopBanners, getHotRecommends, getNewAlbums } from '@/services/recommend'


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







