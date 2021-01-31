import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { Slider } from 'antd'
import { PlaybarWrapper } from './style'

import { getSongDetailAction } from '../store/actionCreators'


function AppPlayBar() {

  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(1496822949))
  }, [dispatch])

  console.log(currentSong)

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
              <img src={currentSong.al && currentSong.al.picUrl + '?param=34y34'} alt=""/>
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{currentSong.ar && currentSong.ar[0].name}</a>
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
