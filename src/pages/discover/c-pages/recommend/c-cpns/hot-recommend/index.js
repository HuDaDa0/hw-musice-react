import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { HotRecommendWrapper } from './style'

function HotRecommend() {

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title="热门推荐" tab={['华语', '流行', '摇滚', '民谣', '电子']} />
      HotRecommend
    </HotRecommendWrapper>
  )
}


export default memo(HotRecommend)
