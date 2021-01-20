import React, { memo } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrapper } from './style'
import { headerLinks } from '@/common/local-data'


function AppHeader(props) {
  const { pathname } = props.location
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={ item.link }>
          { item.title }
          { pathname.includes(item.link) && <i className="sprite_01 icon"></i> }
        </NavLink>
      )
    }
    return <a href={ item.link } target="blank">{ item.title }</a>
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="content-left">
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <ul className="nav-bar">
            {
              headerLinks.map((item, index) => {
                return (
                  <li key={item.title}>{ showSelectItem(item, index) }</li>
                )
              })
            }
          </ul>
        </div>
        <div className="content-right">
          <Input prefix={<SearchOutlined />} style={{ borderRadius: '32px', width: '158px'}} placeholder="音乐/视频/电台/用户" />
          <span className="creator-center">创作者中心</span>
          <span className="login">登录</span>
        </div>
      </div>
      <div className={ pathname.includes('/discover') ? '' : 'divide'}></div>
    </HeaderWrapper>
  )
}


export default withRouter(memo(AppHeader))
