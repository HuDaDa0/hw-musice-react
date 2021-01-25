import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

import { RecommendWrapper, RecommendWrapperLeft } from './style'

function Recomend() {
  return (
    <div>
      <TopBanner />
      <RecommendWrapper className="wrap-v2">
        <RecommendWrapperLeft>
          <HotRecommend />

          <ThemeHeaderRcm title="新碟上架" />
          <ThemeHeaderRcm title="榜单" />
        </RecommendWrapperLeft>

      </RecommendWrapper>
    </div>
  )
}

export default memo(Recomend)
