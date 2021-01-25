import styled from 'styled-components'


export const NewAlbumWrapper = styled.div`
  .album-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;

    .album-banner {
      display: flex !important;
      width: 645px;
      height: 150px;
      margin-top: 28px;
    }
    .btn {
      width: 16px;
      height: 25px;
      cursor: pointer;
    }
    .btn-left {
      background-position: -257px -75px;
    }
    .btn-right {
      background-position: -302px -75px;
    }
  }
`
