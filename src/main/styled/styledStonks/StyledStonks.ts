import styled from "styled-components";

const StyledStonks= styled.div`
    &{
      max-width: 1224px;
      width: 100%;
      margin: 0 auto 64px auto;
    }
  
  h2{
    margin: 0 0 24px 0;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
  }
  
  .main{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .block{
    background: #F2F2F2;
    border-radius: 4px;
    max-width: 600px;
    width: 100%;
  }
  
  .header{
    background: rgba(224, 224, 224, 0.6);
    padding: 16px 32px;
    border-radius: 4px;
  }
  
  .wrapper{
    padding: 0 32px 54px 32px;
  }
  
  h3{
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }
  
  .subBlock{
    margin-top: 24px;
    color: #303030;
  }
  
  .subheader{
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
  
  .body{
    font-size: 16px;
    margin-top: 6px;
  }
  
  span{
    color: cornflowerblue;
    cursor: pointer;
    text-decoration-line: underline;
  }

  @media screen and (max-width: 415px) {
    &{
      padding: 0 16px;
      box-sizing: border-box;
    }
    
    h2{
      margin: 0;
      font-size: 24px;
    }
    
    h3{
      font-size: 18px;
    }
    
    .block{
      margin-top: 24px;
    }
    
    .subheader{
      font-size: 16px;
    }
    
    .body{
      font-size: 14px;
    }
    
    .wrapper{
      padding:0 24px 24px 24px;
    }
    
    .header{
      padding: 18px 24px;
    }
  }
`

export default StyledStonks;