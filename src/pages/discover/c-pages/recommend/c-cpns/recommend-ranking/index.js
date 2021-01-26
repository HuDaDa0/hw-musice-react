import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import { RecommendRankingWrapper } from './style'

import { getTopListAction } from '../../store/actionCreators'

function RecommendRanking() {

  const { upRanking, newRanking, originRanking } = useSelector((state) => {
    return {
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking'])
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  console.log(upRanking, newRanking, originRanking)
  useEffect(() => {
    // 0 新歌榜
    // 2 原创榜
    // 3 飙升榜
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="top-list">
        <TopRanking 
          id={upRanking.id} 
          name={upRanking.name} 
          coverImgUrl={upRanking.coverImgUrl}
          tracks={upRanking.tracks}
        />
        <TopRanking
          id={newRanking.id} 
          name={newRanking.name} 
          coverImgUrl={newRanking.coverImgUrl}
          tracks={newRanking.tracks}
        />
        <TopRanking 
          id={originRanking.id} 
          name={originRanking.name} 
          coverImgUrl={originRanking.coverImgUrl}
          tracks={originRanking.tracks}
        />
      </div>
    </RecommendRankingWrapper>
  )
}


export default memo(RecommendRanking)
