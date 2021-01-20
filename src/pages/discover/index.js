import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from '@/common/local-data'
import { DiscoverWrapper } from './style'


function Discover(props) {
  const { pathname } = props.location
  return (
    <DiscoverWrapper>
      <div className="top">
        <ul className="wrap-v1">
          {
            dicoverMenu.map(item => {
              return (
                <li key={item.title}>
                  <Link to={item.link} className={ pathname === item.link ? 'active' : '' }>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>

      { renderRoutes(props.route.routes) }
    </DiscoverWrapper>
  )
}

export default memo(Discover)