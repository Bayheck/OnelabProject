import styled from "styled-components";

const StyledCreditConditions = styled.div`
  margin: 64px auto;
  max-width: 1224px;
  width: 100%;
  text-align: center;
  
  h3{
    font-weight: 500;
    font-size: 24px;
    margin: 0 0 40px 0;
  }
  
  .iconsContainer{
    display: flex;
  }
  
  svg{
    margin: 0 16px 0 32px;
  }
  
  .firstIcon svg{
    margin: 0 16px 0 0;
  }
  
  .message{
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #737373;
    margin: 36px auto 0 auto;
    max-width: 386px;
    width: 100%;
  }

  @media screen and (max-width: 415px) {
    padding: 0 70px 0 16px;
    box-sizing: border-box;
    text-align: left;
    margin: 40px 0;
    
    h3{
      margin: 0 0 16px 0;
    }
    
    .iconsContainer{
      display: block;
    }
    
    svg, .firstIcon svg{
      margin: 0 16px 0 0;
      width: 16px;
      height: 16px;
    }
    
    .iconBlock{
      display: flex;
      justify-content: left;
      align-items: center;
      margin-top: 12px;
    }
    
    .message{
      margin-top: 26px;
      width: 100%;
    }
  }

  @media screen and (max-width: 320px) {
    h3{
      font-size: 23px;
    }
  }
`

export default StyledCreditConditions;