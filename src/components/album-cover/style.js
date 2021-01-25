import styled from 'styled-components'


export const AlbumCoverWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  .u-cover {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 7px;
    img {
      width: 100%;
      height: 100%;
    }
    .msk {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .title {
    width: 90%;
    color: #000;
    line-height: 18px;
    cursor: pointer;
  }
  .author {
    width: 90%;
    color: #666;
    line-height: 18px;
    cursor: pointer;
  }

`
