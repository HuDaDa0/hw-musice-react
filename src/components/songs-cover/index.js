import React, { memo } from 'react'

import { SongCoverWrapper } from './stlye'


function SongsCover() {

  return (
    <SongCoverWrapper>
      <div className="u-cover">
        <img src="http://p2.music.126.net/A_DazNo88O6C0R6knvCtVA==/109951165529221838.jpg?param=140y140" alt=""/>
        <a className="msk" href="javascript">hahah</a>
        <div className="cover-bottom bottom">
          <span>
            <i className="sprite_icon erji"></i>
            98
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      <p className="desc">独立梦室 | 火烈鸟 糖果与冬日遐想</p>
    </SongCoverWrapper>
  )
}


export default memo(SongsCover)

