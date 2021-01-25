import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import SongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style'

import { getHotRecommendsAction } from '../../store/actionCreators'


function HotRecommend() {

  const { hotRecommed } = useSelector(state => {
    return {
      hotRecommed: state.getIn(['recommend', 'hotRecommend'])
    }
  })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title="热门推荐" tab={['华语', '流行', '摇滚', '民谣', '电子']} />
      <div className="song-list">
        {
          hotRecommed.map(item => {
            return (
              <SongsCover 
                key={item.id}
                id={item.id}
                name={item.name}
                picUrl={item.picUrl}
                playCount={item.playCount}
                className="song-item" />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
}


export default memo(HotRecommend)
