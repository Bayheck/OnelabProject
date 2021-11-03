import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #F8F8F8;
  width: 100%;
  .content{
    display: flex;
    justify-content: left;
    align-items: center;
    max-width: 1224px;
    flex-basis: 100%;
    height: 50px;
    margin: 0 auto;  
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 415px) {
    & {
      
    }
    
    & .content{
      width: 375px;
      padding: 10px 16px;
      margin: 0;
    }
  }
  
  @media screen and (max-width: 320px){
    & .content{
      width: 320px;
    }
  }

`

export default StyledHeader;