import styled from 'styled-components'


export const DiscoverWrapper = styled.div`

  .top {
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;

    ul {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 180px;
      li {
        margin: 0 17px;
        a {
          display: block;
          height: 20px;
          color: #fff;
          text-decoration: none;
          text-align: center;
          padding: 0 13px;
          border-radius: 20px;
          transition: all .3s;
          &:hover {
            background: #9B0909;
          }
          &.active {
            background: #9B0909;
          }
        }
      }
    }
  }


`



