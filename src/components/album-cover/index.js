import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { AlbumCoverWrapper } from './style'


function AlbumCover(props) {
  const { id, picUrl, name, author } = props

  return (
    <AlbumCoverWrapper>
      <div className="u-cover">
        <img src={ picUrl + '?param=100y100' } alt=""/>
        <a href={`https://music.163.com/#/album?id=${id}`} className="msk image_cover" title={name}>{name}</a>
      </div>
      <p className="title text-nowrap">{name}</p>
      <p className="author text-nowrap">{author}</p>
    </AlbumCoverWrapper>
  )
}

AlbumCover.propTypes = {
  id: PropTypes.number.isRequired,
  picUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}


export default memo(AlbumCover)
