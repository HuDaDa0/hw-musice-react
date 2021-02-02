import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { Slider, message } from 'antd'
import { PlaybarWrapper } from './style'

import { 
  getSongDetailAction,
  changeSequence,
  changeCurrentIndexAndSongAction,
  getLyricAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators'
import { formatMinuteSecond, getPlaySong } from '@/utils/format-utils'


function AppPlayBar() {

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const { currentSong, sequence, playList, lyricList, currentLyricIndex } = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
      playList: state.getIn(['player', 'playList']),
      sequence: state.getIn(['player', 'sequence']),
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(1496822949))
    dispatch(getLyricAction(1496822949))
  }, [dispatch])

  useEffect(() => {
    currentSong.id && (audioRef.current.src = getPlaySong(currentSong.id))
    currentSong.id && dispatch(getLyricAction(currentSong.id))
    // 浏览器一加载完成的时候，直接 play() 是会报错的 
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong, dispatch])
  // other handle
  const duration = currentSong.dt || 0

  // handle function
  const playMusic = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    // 加一个 isChanging 判断当前 进度条 是否在拖动
    // 如果在拖动，isChanging = true  就不会进行时间更新，而是走 afterChange 函数
    // 因为 afterChange 会拿到进度条的进度时间，而 timeUpdate 拿到的是当前音乐播放的下一秒
    // 这样就会出现进度条的闪动

    const currentTime = e.target.currentTime  // 秒 s

    if (!isChanging) {
      // const currentTime = e.target.currentTime  // 秒 s
      setCurrentTime(currentTime)
      setProgress(currentTime * 1000 / duration * 100)
    }
    let i = 0
    for (; i < lyricList.length; i++) {
      if (currentTime * 1000 < lyricList[i].time) {
        break
      }
    }

    // 此部分更新太频繁了，可以优化一下
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const currentLyric = lyricList[i -1] && lyricList[i -1].content
      currentLyric && message.open({
        key: 'lyric',
        content: currentLyric,
        duration: 0,
        className: 'lyric-class'
      })
    }
  }

  const changeProgress = useCallback((value) => {
    setCurrentTime(value / 100 * duration / 1000)
    setProgress(value)
    setIsChanging(true)
  }, [duration])

  const afterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    // setCurrentTime(currentTime)
    // setProgress(value)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  const handleChangeSequence = () => {
    // sequence = 0, 1, 2
    let newSequence = sequence + 1
    if (newSequence === 3) {
      newSequence = 0
    }
    dispatch(changeSequence(newSequence))
  }

  const changeSong = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const handleAudioEnd = (e) => {
    if (sequence === 2) {  // 单曲循环
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  return (
    <PlaybarWrapper className="sprite_player" isPlaying={isPlaying} sequence={sequence}>
      <div className="content wrap-v2">
        <div className="control-box">
          <button className="sprite_player prev" onClick={ e => changeSong(-1) }></button>
          <button className="sprite_player play" onClick={ e => playMusic() }></button>
          <button className="sprite_player next" onClick={ e => changeSong(1) }></button>
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
            <button className="sprite_player btn loop" onClick={ handleChangeSequence }></button>
            <button className="sprite_player btn playlist">{playList.length}</button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={ e => timeUpdate(e) } onEnded={ e => handleAudioEnd(e) }></audio>
    </PlaybarWrapper>
  )
}


export default memo(AppPlayBar)
