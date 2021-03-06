import styled from "styled-components";

const StyledFooter = styled.div`
    &{
      max-width: 1920px;
      width: 100%;
      background: rgba(248, 248, 248, 1);
      color: #303030;
    }
  
    & .main{
      width: 100%;
      max-width: 1224px;
      margin: 0 auto;
      padding: 32px;
    }
    
    & .infoBlocks{
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
    }

    ul{
      padding: 0;
      list-style: none;
      margin: 8px 0 0 0;
      font-size: 14px;
      line-height: 240%;
    }
    
    li:hover{
      color: #9D2550;
      cursor: pointer;
    }
    
    & .coloredInfo{
      color: #0E2B91;
      font-weight: 500;
    }
    
    & .about{
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
    }
    
    & .bank{
      margin-right: 147px;
    }
    
    & .us{
      margin-right: 98px;
    }
    
    & .press{
      margin-right: 192px;
    }
    
    & .contacts{
      padding-top: 24px;
      margin-top: 32px;
      border-top: 1px solid rgba(189, 189, 189, 0.5);
      display: flex;
      justify-content: left;
    }
    
    & .rights{
      margin-top: 8px;
      font-size: 14px;
      line-height: 150%;
    }
    
    & .socials{
      display: flex;
      justify-content: space-between;
      margin-left: 72px;
      width: 165px;
    }
    
    svg:hover{
      cursor: pointer;
      & path{
        fill: #9D2550;
      }
      & rect,circle{
        stroke: #9D2550;
      }
    }
    
    path{
      fill: #303030;
    }
    
    & .visionContainer{
      margin-left: auto;
      position: relative;
    }
    
    & .visionButton{
      padding: 16px 20px;
      width: 312px;
      height: 50px;
      text-align: left;
      font-family: Rubik;
      font-size: 16px;
      line-height: 100%;
      font-weight: 700;
      background: #303030;
      border-radius: 4px;
      border: none;
      color: white;
      cursor: pointer;
    }
    
    img{
      position: absolute;
      right: 32px;
      top: 19px;
    }

    @media screen and (max-width: 415px) {
      & .main{
        max-width: 360px;
        margin-bottom: 24px;
      }
      
      & .infoLinkList{
        display: none;
      }
      
      & .main{
        padding: 0;
      }

      & .MuiPaper-root{
        display: block;
      }
      
      & .contacts{
        display: block;
        text-align: center;
        border: none;
        margin: 0;
      }
      
      & .socials{
        margin: 26px auto 0 auto;
      }
      
      & .visionContainer{
        margin: 0;
      }
      
      & .visionButton{
        display: block;
        margin: 44px auto 0 auto;
      }
      
      img{
        right: 56px;
      }
    }

    @media screen and (max-width: 320px) {
      img{
        right: 36px;
      }
    }
`

export default StyledFooter;