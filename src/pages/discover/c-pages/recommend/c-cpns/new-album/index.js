import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { Carousel } from 'antd'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'

import { getNewAlbumAction } from '../../store/actionCreators'

function NewAlbum() {

  const albumRef = useRef()
  const { newAlbum } = useSelector((state) => {
    return {
      newAlbum: state.getIn(['recommend', 'newAlbum'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="album-content">
        <span className="btn btn-left sprite_02" onClick={ e => albumRef.current.prev() }></span>
        <div className="ablum-list">
          <Carousel ref={albumRef} dots={false} autoplay>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="album-banner">
                    {
                      newAlbum.slice(item * 5, (item + 1) * 5).map(iten => {
                        return (
                          <AlbumCover 
                            key={iten.id} 
                            id={iten.id} 
                            picUrl={iten.picUrl} 
                            name={iten.name} 
                            author={iten.artist.name} 
                          />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <span className="btn btn-right sprite_02" onClick={ e => albumRef.current.next() }></span>
      </div>
    </NewAlbumWrapper>
  )
}


export default memo(NewAlbum)

