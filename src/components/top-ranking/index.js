import React, { memo } from 'react'

import { TopRankingWrapper } from './style'


function TopRanking() {

  return (
    <TopRankingWrapper>
      <div className="header-box">
        <div className="img-box">
          <img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=80y80" alt=""/>
          <a href="https://music.163.com/#/discover/toplist?id=19723756" className="image_cover" title="飙升榜">飙升榜</a>
        </div>
        <div className="info">
          <h3 className="info-title">飙升榜</h3>
          <p>
            <span className="btn play sprite_02"></span>
            <span className="btn favor sprite_02"></span>
          </p>
        </div>
      </div>
      <ul className="song-box">
        <li className="song-item">
          <span>
            <span className="num">1</span>
            <span className="song-name">王鑫空dasedawdwdwd</span>
          </span>
          <div className="operate">
            <span className="btn sprite_02 play"></span>
            <button className="btn sprite_icon2 addto"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </li>
        <li className="song-item">
          <span>
            <span className="num">1</span>
            <span className="song-name">王鑫空dasedawdwdwd</span>
          </span>
          <div className="operate">
            <span className="btn sprite_02 play"></span>
            <button className="btn sprite_icon2 addto"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </li>
        <li className="song-item">
          <span>
            <span className="num">1</span>
            <span className="song-name">王鑫空dasedawdwdwd</span>
          </span>
          <div className="operate">
            <span className="btn sprite_02 play"></span>
            <button className="btn sprite_icon2 addto"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </li>
        <li className="song-item">
          <span>
            <span className="num">1</span>
            <span className="song-name">王鑫空dasedawdwdwd</span>
          </span>
          <div className="operate">
            <span className="btn sprite_02 play"></span>
            <button className="btn sprite_icon2 addto"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </li>
      </ul>
    </TopRankingWrapper>
  )
}


export default memo(TopRanking)

