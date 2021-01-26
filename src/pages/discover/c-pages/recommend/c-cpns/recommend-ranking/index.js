import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import { RecommendRankingWrapper } from './style'

function RecommendRanking() {

  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="top-list">
        <TopRanking />
      </div>
    </RecommendRankingWrapper>
  )
}


export default memo(RecommendRanking)
