import { CHANGE_TOP_BANNERS } from './constants'
import { getTopBanners } from '@/services/recommend'


const changeTopBannerAction = (res) => {
  return {
    type: CHANGE_TOP_BANNERS,
    data: res.banners
  }
}

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}








