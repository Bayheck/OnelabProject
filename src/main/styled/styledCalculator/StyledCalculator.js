import styled from "styled-components";

const StyledCalculator = styled.div`
  &{
    max-width: 1224px;
    width: 100%;
    margin: 0 auto;
    padding: 0 32px 32px 32px;
  }
  
  & .slider{
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 24px;
  }
  
  & .loanLimits{
    display: flex;
    justify-content: space-between;
    max-width: 631px;
    width: 100%;
    margin: 8px 0 24px 0;
    font-size: 12px;
    color: #737373;
  }
  & .header{
    background-color: white;
  }
  
  & .header h3{
    font-weight: 500;
    font-size: 30px;
    margin: 0 0 24px 0;
  }
  
  & .content{
    background-color: rgba(242, 242, 242, 1);
    padding: 32px;
    display: flex;
    justify-content: left;
    position: relative;
    border-radius: 4px;
    margin-top: 24px;
  }
  
  & .incomeForte{
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 28px 0 24px 0;
  }
  
  & .creditDisplay{
    padding: 30px 30px 30px 0;
    margin-left: 32px;
  }
  
  & .vertLine{
    position: absolute;
    border-left: 1px solid rgba(224, 224, 224, 1);
    top: 24px;
    height: 296px;
  }
  
  & .innerCreditDisplay{
    margin-left: 32px;
  }
  
  & .textForCredit{
    font-size: 14px;
    margin-bottom: 14px;
  }
  
  & .creditPercents{
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 32px;
  }
  
  & .creditDetails{
    margin-bottom: 12px;
    font-size: 16px;
  }
  
  & .additionalInfo{
    font-size: 14px;
    color: #737373;
  }
`

export default StyledCalculator;