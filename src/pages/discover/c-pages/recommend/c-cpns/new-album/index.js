import React, { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'

import { NewAlbumWrapper } from './style'

function NewAlbum() {

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="album-content">
        <span className="btn btn-left sprite_02"></span>
        <div className="album-banner">
          <AlbumCover />
          <AlbumCover />
          <AlbumCover />
          <AlbumCover />
          <AlbumCover />
        </div>
        <span className="btn btn-right sprite_02"></span>
      </div>
    </NewAlbumWrapper>
  )
}


export default memo(NewAlbum)

