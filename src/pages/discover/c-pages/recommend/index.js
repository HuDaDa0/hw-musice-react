import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function Recomend() {
  // shallowEqual 进行浅层比较
  const { topBanners } = useSelector(state => {
    return {
      topBanners: state.recommend.topBanners
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>Recomend</div>
  )
}

export default memo(Recomend)
