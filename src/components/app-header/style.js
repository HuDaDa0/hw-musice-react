import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  background-color: #242424;

  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;

    .content-left {
      display: flex;
      .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
      }
      .nav-bar {
        display: flex;
        font-size: 14px;
        li {
          line-height: 70px;
          padding: 0 19px;
          &:hover {
            background-color: #000;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }

    .content-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 12px;
      .ant-input {
        font-size: 12px;
      }

      .creator-center {
        display: block;
        width: 90px;
        height: 32px;
        padding-left: 16px;
        line-height: 33px;
        border-radius: 20px;
        border: 1px solid #4F4F4F;
        color: #ccc;
        box-sizing: border-box;
        margin-left: 12px;
        margin-right: 20px;
        cursor: pointer;
        &:hover {
          border-color: #ccc;
          color: #fff;
        }
      }
      .login {
        cursor: pointer;
        color: #787878;
        &:hover {
          color: #999;
        }
      }
    }


  }

  .divide {
    height: 5px;
    background-color: #C20C0C;
  }

`