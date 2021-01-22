import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function Recomend() {
  // const { getBanners, topBanners } = props
  const { topBanners } = useSelector(state => {
    return {
      topBanners: state.recommend.topBanners
    }
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>Recomend</div>
  )
}

export default memo(Recomend)

// const mapStateToProps = (state) => {
//   return {
//     topBanners: state.recommend.topBanners
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction())
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recomend))

