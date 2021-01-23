import styled from 'styled-components'

export const ThemeHeaderRcmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding: 0 10px 0 34px;
  background-position: -225px -154px;
  border-bottom: 2px solid #C10D0C;

  .hot-left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    .tab {
      color: #666;
      font-size: 12px;
      margin-left: 20px;
      span {
        cursor: pointer;
      }
      .line {
        margin: 0 10px;
        color: #ccc;
      }
    }
  }
  .hot-right {
    color: #666;
    cursor: pointer;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -239px;
    }
  }

`