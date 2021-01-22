import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function Recomend() {
  // shallowEqual 进行浅层比较
  const { topBanners } = useSelector(state => {
    return {
      // topBanners: state.get('recommend').get('topBanners'),
      // getIn 是可迭代的，和上面的操作效果一样
      topBanners: state.getIn(['recommend', 'topBanners'])
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>Recomend: {topBanners.length}</div>
  )
}

export default memo(Recomend)
