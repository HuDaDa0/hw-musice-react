import styled from 'styled-components'


export const HotRecommendWrapper = styled.div`

  background-color: #ffffff;
  .hot-rec-left {
    width: 730px;
    padding: 20px 20px 40px;
    border-right: 1px solid #d3d3d3;
    .song-list {
      margin-top: 20px;
      margin-left: -42px;
      display: flex;
      flex-wrap: wrap;
      .song-item {
        padding: 0 0 30px 42px;
      }
    }
  }
`