import styled from "styled-components";

const StyledFrequentQuestions = styled.div`
  max-width: 1224px;
  width: 100%;
  margin: 64px auto;
  
  h3{
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #303030;
  }
  
  .info{
    margin-top: 32px;
    font-size: 12px;
    line-height: 17px;
    color: #999999;
  }
  
  span{
    color: cornflowerblue;
    cursor: pointer;
    text-decoration-line: underline;
  }

  @media screen and (max-width: 415px) {
    padding: 0 16px;
    box-sizing: border-box;
    margin-bottom: 40px;
    
    h3{
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
`

export default StyledFrequentQuestions;