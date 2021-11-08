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
    color: #737373;
    margin-top: 36px;
  }
`

export default StyledCreditConditions;