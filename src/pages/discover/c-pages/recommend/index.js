import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function Recomend(props) {
  const { getBanners, topBanners } = props
  console.log(topBanners)

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>Recomend</div>
  )
}

const mapStateToProps = (state) => {
  return {
    topBanners: state.recommend.topBanners
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBanners: () => {
      dispatch(getTopBannerAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recomend))

