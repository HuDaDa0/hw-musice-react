import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style'

function HotRecommend() {

  return (
    <HotRecommendWrapper>
      <div className="hot-rec-left">
        <ThemeHeaderRcm title="热门推荐" tab={['华语', '流行', '摇滚', '民谣', '电子']} />
        <div className="song-list">
          <SongsCover className="song-item" />
          <SongsCover className="song-item" />
          <SongsCover className="song-item" />
          <SongsCover className="song-item" />
          <SongsCover className="song-item" />
          <SongsCover className="song-item" />
          <SongsCover className="song-item" />
          <SongsCover className="song-item" />
        </div>

        <ThemeHeaderRcm title="新碟上架" />
        <ThemeHeaderRcm title="榜单" />
      </div>
    </HotRecommendWrapper>
  )
}


export default memo(HotRecommend)
