import styled from 'styled-components'
import sprite_cover from '@/assets/img/sprite_cover.png'

export const SongCoverWrapper = styled.div`
  width: 140px;
  height: 204px;
  box-sizing: content-box;

  .u-cover {
    position: relative;
    width: 140px;
    height: 140px;
    img {
      width: 140px;
      height: 140px;
    }
    .msk {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url(${sprite_cover}) no-repeat;
      background-position: 0 0;
      cursor: pointer;
      text-indent: -9999px;
    }
    .bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 27px;
      padding: 0 10px;
      color: #cccccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: url(${sprite_cover}) no-repeat;
      background-position: 0 -537px;

      .erji {
        margin-right: 5px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }

      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }

  .desc {
    margin: 8px 0 3px;
    font-size: 14px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

`
