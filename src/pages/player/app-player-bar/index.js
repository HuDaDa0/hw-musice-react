import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { Slider } from 'antd'
import { PlaybarWrapper } from './style'


function AppPlayBar() {
  
  return (
    <PlaybarWrapper className="sprite_player" isPlaying={true}>
      <div className="content wrap-v2">
        <div className="control-box">
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" ></button>
          <button className="sprite_player next"></button>
        </div>
        <div className="play-info">
          <div className="image">
            <NavLink to="/discover/player">
              <img src="https://p2.music.126.net/m4zo-ZytE82l_Mdw3tUrQA==/109951165483970109.jpg?param=34y34" alt=""/>
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">xxx</span>
              <a href="#/" className="singer-name">xxx</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">xx</span>
                <span className="divider">/</span>
                <span className="duration">xxaa</span>
              </div>
            </div>
          </div>
        </div>
        <div className="operator">
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </div>
      </div>
    </PlaybarWrapper>
  )
}


export default memo(AppPlayBar)
