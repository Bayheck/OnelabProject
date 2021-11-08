import styled from "styled-components";

const StyledCitizenInfo = styled.div`
  max-width: 1224px;
  width: 100%;
  margin: 0 auto;
  
  .container{
    display: flex;
    justify-content: left;
  }
  
  h2{
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 24px;
  }
  
  .box{
    padding: 24px;
    background: #F5F5F5;
    border-radius: 4px;
    margin-right: 24px;
    width: 288px;
  }
  
  .category{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #303030;
    margin-bottom: 24px;
  }
  
  .info{
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #737373;
  }
`

export default StyledCitizenInfo;