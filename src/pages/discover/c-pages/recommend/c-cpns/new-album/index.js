import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { Carousel } from 'antd'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'

import { getNewAlbumAction } from '../../store/actionCreators'

function NewAlbum() {

  const { newAlbum } = useSelector((state) => {
    return {
      newAlbum: state.getIn(['recommend', 'newAlbum'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  console.log(newAlbum.slice(0 * 5, (0 + 1) * 5))
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="album-content">
        <span className="btn btn-left sprite_02"></span>
        <Carousel autoplay>
          {/* {
            [0].map(item => {
              return (
                <div key={item} className="album-banner">
                  {
                    newAlbum.slice(item * 5, (item + 1) * 5).map(iten => {
                      return (
                        <AlbumCover key={iten.id} />
                      )
                    })
                  }
                </div>
              )
            })
          } */}
                <div className="album-banner">
                  <AlbumCover />
                  <AlbumCover />
                  <AlbumCover />
                  <AlbumCover />
                  <AlbumCover />
                </div>
        </Carousel>
        <span className="btn btn-right sprite_02"></span>
      </div>
    </NewAlbumWrapper>
  )
}


export default memo(NewAlbum)

