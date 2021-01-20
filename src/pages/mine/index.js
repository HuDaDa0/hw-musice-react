import React, { memo } from 'react'

import { MineWrapper } from './style.js'


function Mine() {

  return (
    <MineWrapper>
      <div className="n-pglg">
        <div className="login-btn"></div>
      </div>
    </MineWrapper>
  )
}


export default memo(Mine)
