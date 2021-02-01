import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { TopRankingWrapper } from './style'
import { getSongDetailAction } from '@/pages/player/store/actionCreators'


function TopRanking(props) {
  const { id, name, coverImgUrl, tracks } = props

  const dispatch = useDispatch()

  const playMusic = (id) => {
    // 1496833377 半城烟沙 (合唱版)
    // 1496822949 囍（女生版）
    dispatch(getSongDetailAction(id))
  }

  return (
    <TopRankingWrapper>
      <div className="header-box">
        <div className="img-box">
          <img src={coverImgUrl + '?param=80y80'} alt=""/>
          <a href={`https://music.163.com/#/discover/toplist?id=${id}`} className="image_cover" title={name}>{name}</a>
        </div>
        <div className="info">
          <h3 className="info-title">{name}</h3>
          <p>
            <span className="btn play sprite_02"></span>
            <span className="btn favor sprite_02"></span>
          </p>
        </div>
      </div>
      <ul className="song-box">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <li key={item.id} className="song-item">
                <span>
                  <span className="num">{index + 1}</span>
                  <span className="song-name">{item.name}</span>
                </span>
                <div className="operate">
                  <span className="btn sprite_02 play" onClick={ e => playMusic(1496833377) }></span>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </li>
            )
          })
        }
        <li className="more">
          <a href={`https://music.163.com/#/discover/toplist?id=${id}`}>查看全部&gt;</a>
        </li>
      </ul>
    </TopRankingWrapper>
  )
}

TopRanking.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  coverImgUrl: PropTypes.string.isRequired,
  tracks: PropTypes.array.isRequired
}

TopRanking.defaultProps = {
  id: 0,
  name: '',
  coverImgUrl: '',
  tracks: (() => [])()
}

export default memo(TopRanking)

