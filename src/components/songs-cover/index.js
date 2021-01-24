import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { SongCoverWrapper } from './stlye'

import { getCount } from '@/utils/format-utils'


function SongsCover(props) {
  const { className, id, name, picUrl, playCount } = props
  return (
    <SongCoverWrapper className={className}>
      <div className="u-cover">
        <img src={ picUrl + '?param=140y140' } alt=""/>
        <a className="msk" href={`https://music.163.com/#/playlist?id=${id}`}>hahah</a>
        <div className="cover-bottom bottom">
          <span>
            <i className="sprite_icon erji"></i>
            {getCount(playCount)}
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      <p className="desc">{name}</p>
    </SongCoverWrapper>
  )
}

SongsCover.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picUrl: PropTypes.string.isRequired,
  playCount: PropTypes.number.isRequired
}

SongsCover.defaultProps = {
  id: '5326454936',
  name: '《姐姐的爱乐之程》音频全收录',
  picUrl: 'https://p2.music.126.net/QsjD4ctmHYfS3fHaGYhpLA==/109951165556875064.jpg',
  playCount: 0
}

export default memo(SongsCover)

