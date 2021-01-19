import React, { memo } from 'react'

import { HeaderWrapper } from './style'


function AppHeader() {

  return (
    <HeaderWrapper>
      <div className="content wrap-v1"></div>
      <div className="divide"></div>
    </HeaderWrapper>
  )
}



export default memo(AppHeader)