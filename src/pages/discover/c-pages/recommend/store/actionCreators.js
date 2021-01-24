import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from './constants'
import { getTopBanners, getHotRecommends } from '@/services/recommend'


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







