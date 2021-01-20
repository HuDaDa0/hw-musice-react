import styled from "styled-components"

import sprite_footer_02 from "@/assets/img/sprite_footer_02.png"
import sprite_footer_01 from "@/assets/img/sprite_footer_01.png"


export const FooterWrapper = styled.div`

  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;

  .wrap-v2 {
    display: flex;
    justify-content: space-between;
  }

  .footer-left {
    padding-top: 15px;
    line-height: 24px;
    color: #666;

    .link {
      a {
        color: #999;
      }
      
      .line {
        margin: 0 8px 0 10px;
        color: #c2c2c2;
      }
    }
  }

  .footer-right {
    display: flex;
    margin-top: 33px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 40px;

      .link {
        display: block;
        width: 50px;
        height: 45px;

        background-image: url(${sprite_footer_02});
        background-size: 110px 450px;
      }

      :nth-child(1) .link {
        background-position: -60px -101px;
      }
      :nth-child(2) .link {
        background-position: 0 0;
      }
      :nth-child(3) .link {
        background-position: -60px -50px;
      }
      :nth-child(4) .link {
        background-position: 0 -101px;
      }

      .title {
        margin-top: 5px;
        display: block;
        width: 52px;
        height: 10px;
        background-image: url(${sprite_footer_01});
        background-size: 180px 100px;
      }

      :nth-child(1) .title {
        background-position: -1px -90px;
      }
      :nth-child(2) .title {
        background-position: 0 0;
        margin-top: 7px;
      }
      :nth-child(3) .title {
        background-position: 0 -54px;
        margin-top: 6px;
      }

      :nth-child(4) .title {
        background-position: -1px -72px;
        margin-top: 6px;
      }
    }

  }


`




