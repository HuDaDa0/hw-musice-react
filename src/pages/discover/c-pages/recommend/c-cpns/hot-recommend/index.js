import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style'

function HotRecommend() {

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title="热门推荐" tab={['华语', '流行', '摇滚', '民谣', '电子']} />
      <SongsCover />
    </HotRecommendWrapper>
  )
}


export default memo(HotRecommend)
