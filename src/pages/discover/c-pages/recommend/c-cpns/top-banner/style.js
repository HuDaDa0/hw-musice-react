import styled from 'styled-components'
import download from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'


export const TopBannerWrapper = styled.div`
  background: url(${props => props.bannerImg}) center/6000px;
  height: 285px;

  .wrap {
    position: relative;
    display: flex;
    width: 982px;
    height: 285px;
    margin: 0 auto;
    
    .banner-left {
      width: 730px;
      height: 100%;
      .banner-item {
        width: 100%;
        height: 285px;
        img {
          width: 100%;
          height: 100%;
        }
      }

    }
    .banner-right {
      width: 254px;
      height: 285px;
      top: 259px;
      text-align: center;
      background: url(${download});
      .btn {
        display: block;
        width: 215px;
        height: 56px;
        margin: 185px 0 0 19px;
        text-indent: -9999px;
        &:hover {
          background: url(${download}) no-repeat 0 0;
          background-position: 0 -290px;
          text-decoration: none;
        }
      }
    }
    .c-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 37px;
      height: 63px;
      background-color: transparent;
      background-image: url(${banner_sprite});
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, .1);
      }
    }
    .btnl {
      left: -68px;
      background-position: 0 -360px;
    }
    .btnr {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`

