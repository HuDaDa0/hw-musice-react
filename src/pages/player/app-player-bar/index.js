import React, { memo, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { Slider } from 'antd'
import { PlaybarWrapper } from './style'

import { getSongDetailAction } from '../store/actionCreators'
import { formatMinuteSecond, getPlaySong } from '@/utils/format-utils'


function AppPlayBar() {

  const [isPlaying, setisPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(1496822949))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  // other handle
  const duration = currentSong.dt || 0

 
  // handle function
  const playMusic = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setisPlaying(!isPlaying)
  }

  const timeUpdate = (e) => {
    if (!isChanging) {
      const currentTime = e.target.currentTime
      setCurrentTime(currentTime)
      setProgress(currentTime * 1000 / duration * 100)
    }
  }

  const changeProgress = (value) => {
    setCurrentTime(value / 100 * duration / 1000)
    setProgress(value)
    setIsChanging(true)
  }

  const afterChange = (value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    // setCurrentTime(currentTime)
    // setProgress(value)
    setIsChanging(false)
    // playMusic()
  }


  return (
    <PlaybarWrapper className="sprite_player" isPlaying={isPlaying}>
      <div className="content wrap-v2">
        <div className="control-box">
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={ e => playMusic() }></button>
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
              <Slider 
                defaultValue={0} 
                value={progress} 
                tooltipVisible={false} 
                onChange={ e => changeProgress(e) } 
                onAfterChange={ e => afterChange(e) } 
              />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
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
      <audio ref={audioRef} onTimeUpdate={ e => timeUpdate(e) }></audio>
    </PlaybarWrapper>
  )
}


export default memo(AppPlayBar)
