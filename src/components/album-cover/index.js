import React, { memo } from 'react'

import { AlbumCoverWrapper } from './style'


function AlbumCover() {

  return (
    <AlbumCoverWrapper>
      <div className="u-cover">
        <img src="http://p4.music.126.net/gZLNLSkO9daFx4pdNDMqDw==/109951165549269039.jpg?param=100y100" alt=""/>
        <a href="javascript" className="msk image_cover">哈哈</a>
      </div>
      <p className="title text-nowrap">陆星</p>
      <p className="author text-nowrap">万能青年</p>
    </AlbumCoverWrapper>
  )
}


export default memo(AlbumCover)
