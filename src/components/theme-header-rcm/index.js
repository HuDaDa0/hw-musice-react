import React, { Fragment, memo } from 'react'

import { ThemeHeaderRcmWrapper } from './style'


function HotRecommend(props) {
  const { title, tab } = props
  return (
    <ThemeHeaderRcmWrapper className="sprite_02">
      <div className="hot-left">
        <h3 className="title">{ title }</h3>
        <p className="tab">
          {
            tab.map(item => {
              return (
                <Fragment key={item}>
                  <span >华语</span>
                  <span className="line">|</span>
                </Fragment>
              )
            })
          }            
        </p>
      </div>
      <p className="hot-right">
        更多
        <i className="icon sprite_02"></i>
      </p>
    </ThemeHeaderRcmWrapper>
  )
}


export default memo(HotRecommend)
