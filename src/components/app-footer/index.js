/* eslint-disable react/jsx-no-target-blank */
import { Fragment, memo } from 'react'

import { FooterWrapper } from './style'
import { footerLinks, footerImages } from '@/common/local-data'


function AppFooter() {

  return (
    <FooterWrapper>
      <div className="wrap-v2">
        <div className="footer-left">
          <p className="link">
            { 
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <a href={item.link} rel="noopener noreferrer" target="_blank">{ item.title }</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </p>
          <p className="copyright">
            网易公司版权所有©1997-2021 &nbsp;&nbsp;&nbsp;杭州乐读科技有限公司运营: &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
          </p>
          <p className="contact">
            违法和不良信息举报电话：0571-89853516 &nbsp;&nbsp;&nbsp;&nbsp;
            举报邮箱:  &nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p className="copyright">
            粤B2-20090191-18  工业和信息化部备案管理系统网站 &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target="_blank">
              <span className="police-logo"></span>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
        <div className="footer-right">
          {
            footerImages.map(item => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        </div>
      </div>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
