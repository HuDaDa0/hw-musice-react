import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

import { RecommendWrapper, RecommendWrapperLeft } from './style'

function Recomend() {
  return (
    <div>
      <TopBanner />
      <RecommendWrapper className="wrap-v2">
        <RecommendWrapperLeft>
          <HotRecommend />
          <NewAlbum />
          <ThemeHeaderRcm title="榜单" />
        </RecommendWrapperLeft>

      </RecommendWrapper>
    </div>
  )
}

export default memo(Recomend)
