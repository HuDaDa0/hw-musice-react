import React, { memo } from 'react'

import { FriendWrapper } from './style.js'

function Friend() {

  return (
    <FriendWrapper>
      <div className="n-pglg2">
        <p>
          你可以关注明星和好友品味他们的私房歌单
          <br />
          通过他们的动态发现更多精彩音乐
        </p>
        <div className="login-btn"></div>
      </div>
    </FriendWrapper>
  )
}


export default memo(Friend)

