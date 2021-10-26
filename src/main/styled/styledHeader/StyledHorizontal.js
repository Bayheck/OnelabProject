import styled from "styled-components";

const StyledHorizontal = styled.ul`
    &{
      padding: 0;
      margin: 0 0 0 86px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  
    & li{
      display: inline-block;
      margin-right: 30px;
    }
    
    & .current{
      color: #9D2550;
      height: 100%;
      line-height: 50px;
      border-bottom: 2px solid #9D2550;
      box-sizing: border-box;
    }
`
export default StyledHorizontal;