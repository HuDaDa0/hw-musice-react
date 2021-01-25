import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'

import { RecommendWrapper, RecommendWrapperLeft } from './style'

function Recomend() {
  return (
    <div>
      <TopBanner />
      <RecommendWrapper className="wrap-v2">
        <RecommendWrapperLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendWrapperLeft>

      </RecommendWrapper>
    </div>
  )
}

export default memo(Recomend)
