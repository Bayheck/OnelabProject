import styled from "styled-components";

const StyledDocumentsForCredit = styled.div`
    &{
      max-width: 1224px;
      width: 100%;
      margin: 0 auto 64px auto;
    }
  
  h3{
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 40px 0;
  }
  
  .info{
    margin-top: 26px;
    font-size: 12px;
    line-height: 18px;
    color: #737373;
  }
  
  span{
    color: cornflowerblue;
    cursor: pointer;
    text-decoration-line: underline;
  }
  
  svg{
    margin-right: 6px;
  }
  
  .point{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 16px;
  }

  @media screen and (max-width: 415px) {
    &{
      padding: 0 16px 0 16px;
      box-sizing: border-box;
      margin-bottom: 40px;
    }
    
    h3{
      margin-bottom: 16px;
    }
  }
`

export default StyledDocumentsForCredit;