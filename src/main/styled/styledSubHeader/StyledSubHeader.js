import styled from "styled-components";

const StyledSubHeader = styled.div`
    &{
      max-width: 1224px;
      width: 100%;
      margin: 0 auto;
    }
  
    & ul{
      padding: 0;
      font-size: 14px;
      line-height: 17px;
      margin: 20px 0 20px 281px;
    }
  
    & ul li{
      display: inline-block;
      margin-right: 56px;
      text-align: center;
      cursor: pointer;
    }

    & ul li:last-child {
      margin-right: 0px;
    }
  
    & ul li:hover{
      color: #9D2550;
      & path{
        fill: #9D2550;
      }
    }
  
    &&& ul > li > svg{
      margin-bottom: 10px;
    }
`

export default StyledSubHeader;