import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'

function Recomend() {
  return (
    <div>
      <TopBanner />
      <div className="wrap-v2">
        <HotRecommend />

      </div>
    </div>
  )
}

export default memo(Recomend)
