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
`

export default StyledMobileAd;