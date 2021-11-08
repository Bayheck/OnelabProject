import styled from "styled-components";

const StyledExpressCalculator = styled.div`
  max-width: 808px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  
  h3{
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }
  
  .body{
    padding: 40px 80px;
    background: #F2F2F2;
    border-radius: 4px;
  }
  
  .creditDetails{
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .mobileDisplay{
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 4px;
    width: 208px;
    text-align: right;
    padding: 5px 10px 5px 10px;
    font-size: 24px;
    line-height: 36px;
    color: #303030;
  }

  & .loanLimits{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 8px 0 40px 0;
    font-size: 12px;
    color: #737373;
  }
  
  .time{
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  .timeButton{
    width: 70px;
    height: 36px;
    border: none;
    background: rgba(157, 37, 80, 0.4);
    border-radius: 4px;
    font-family: Rubik;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
    display: block;
    cursor: pointer; 
    :hover{
      background: #9D2550;
    }
  }
  
  .chosenButton{
    background: rgba(157, 37, 80, 1);
  }
  
  hr{
    border: 1px solid #E0E0E0;
    margin: 0 0 22px 0;
  }
  
  .calculation{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .info{
    text-align: left;
  }
  
  .incomeForte{
    display: flex;
  }
  
  .switch{
    background: rgba(224, 224, 224, 0.6);
    border-radius: 4px;
    padding: 16px;
  }
  
  .iReceive{
    width: 232px;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
  
  .monthlyDisplay{
    display: flex;
    justify-content: space-between;
    width: 304px;
    font-size: 14px;
    align-items: center;
  }
  
  .monthlyMoney{
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #1E2A41;
  }
  
  .miniContainer{
    max-width: 600px;
    width: 100%;
    margin: 24px auto;
    display: flex;
    justify-content: space-between;
  }
  
  .contract{
    text-align: left;
    max-width: 600px;
    width: 100%;
    margin: 0 auto 24px auto;
    font-size: 14px;
    line-height: 21px;
    color: #303030;
  }
  
  .additionalInfo{
    font-size: 14px;
    line-height: 21px;
    color: #737373;
    text-align: left;
    max-width: 600px;
    width: 100%;
    margin: 0 auto 24px auto;
  }
  
  .goCredit{
    padding: 14px 32px;
    background: #9D2550;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    display: block;
    margin-left: 24px;
  }
  
  .contractConditions{
    text-decoration-line: underline;
    color: cornflowerblue;
    cursor: pointer;
  }
`

export default StyledExpressCalculator;
