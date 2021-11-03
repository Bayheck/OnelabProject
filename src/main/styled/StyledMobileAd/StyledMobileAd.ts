import styled from "styled-components";

const StyledMobileAd = styled.div`
    &{
      max-width: 1920px;
      width: 100%;
      background: #F2F2F2;
      border-radius: 4px;
      margin-top: 168px;
    }
  
    & .content{
      margin: 0 auto;
      max-width: 1224px;
      width: 100%;
      padding: 48px 0;
      box-sizing: border-box;
      position: relative;
    }
  
    h5{
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      margin: 0;
    }
  
    ul{
      line-height: 150%;
      color: #303030;
      padding: 0 0 0 16px;
      margin-top: 24px;
    }
  
    li{
      margin-bottom: 16px;
    }
  
    .downloadButtons{
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      width: 303px;
    }
  
    .iphone{
      position: absolute;
      left: 740px;
      top: -104px;
    }

    @media screen and (max-width: 415px) {
      &{
        margin: 0 auto;
        width: 100%;
        max-width: 328px;
        height: 664px;
      }
      
      & .downloadButtons{
        margin: 24px auto 0 auto;
      }
      
      & .iphone{
        width: 176px;
        left: 76px;
        top: 345px;
      }
      
      & .content{
        padding: 12px;
      }
      
      h5{
        margin: 12px;
      }
      
      ul{
        margin: 12px;
      }
    }

    @media screen and (max-width: 320px) {
      &{
        max-width: 288px;
      }
      
      a img{
        width: 75%;
      }
      
      & .iphone{
        left: 20%;
      }
    }
`

export default StyledMobileAd;