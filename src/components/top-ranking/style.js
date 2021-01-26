import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 230px;

  .header-box {
    display: flex;
    padding: 20px 0 0 19px;

    .img-box {
      position: relative;
      width: 80px;
      height: 80px;
    }
    .info {
      margin: 6px 0 0 10px;
      .info-title {
        cursor: pointer;
        text-decoration: none;
        color: #333;
        font-size: 14px;
        font-weight: bold;
      }
      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .song-box {
    padding-left: 15px;
    margin-top: 20px;
    .song-item {
      display: flex;
      justify-content: space-between;
      height: 32px;
      line-height: 32px;
      cursor: pointer;
      &:hover .song-name {
        width: 96px;
      }
      &:hover .operate {
        display: flex;
      }
      &:nth-child(-n+3) .num{
        color: #c10d0c;
      }
      .num {
        display: inline-block;
        width: 35px;
        color: #666;
        text-align: center;
        font-size: 16px;
        vertical-align: middle;
      }
      .song-name {
        display: inline-block;
        width: 170px;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
      .operate {
        display: none;
        align-items: center;
        width: 82px;
        height: 32px;
        transition: all .3s;
        
        .btn {
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favor {
          background-position: -297px -268px;
        }
      }
    }

  }

`
