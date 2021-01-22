import React, { memo, useEffect, useState, useCallback, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { TopBannerWrapper } from './style'


function TopBanner() {

  let [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef()

  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.getIn(['recommend', 'topBanners'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const beforeChange = useCallback((from, to) => {
      setCurrentIndex(to)
  }, [])


  return (
    <TopBannerWrapper bannerImg={topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'}>
      <div className="wrap">
        <div className="banner-left">
          <Carousel ref={carouselRef} effect="fade" autoplay beforeChange={ beforeChange }>
            {
              topBanners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="banner-right">
          <a href="https://music.163.com/#/download" rel="noopener noreferrer" target="_blank" className="btn">下载客户端</a>
        </div>
        <span className="c-btn btnl" onClick={ e => carouselRef.current.prev() }></span>
        <span className="c-btn btnr" onClick={ e => carouselRef.current.next() }></span>
      </div>

    </TopBannerWrapper>
  )
}


export default memo(TopBanner)
