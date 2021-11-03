import styled from "styled-components";

const StyledCalculator = styled.div`
  &{
    max-width: 1288px;
    width: 100%;
    margin: 0 auto;
    padding: 0 32px 32px 32px;
    box-sizing: border-box;
  }
  
  & .sliderMenu{
    max-width: 850px;
    width: 100%;
  }
  
  & .slider{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
  }
  
  & .sliderValue{
    white-space: nowrap;
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
    justify-content: space-between;
    flex-wrap: wrap;
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
  
  & .mobileDisplay{
    display: none;
  }
  
  & .creditDisplayMobile{
    display: none;
  }
  
  & .buttonMobile{
    display: none;
  }

  @media screen and (max-width: 415px) {
    &{
      max-width: 328px;
      padding: 0;
    }
    
    & .header h3{
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
    }
    
    & .content{
      padding: 24px;
    }
    
    & .creditDetails{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    
    & .mobileDisplay{
      display:block;
      font-size: 18px;
      color: black;
    }
    
    & .sliderValue{
      display: none;
    }
    
    & .vertLine{
      display: none;
    }
    
    & .creditDisplay{
      display: none;
    }
    
    & .buttonMobile{
      display: block;
    }
    
    & .creditDisplayMobile{
      display: block;
      border-top: 1px solid rgba(224, 224, 224, 1);
      padding-top: 24px;
    }
    
    & .creditPercents{
      font-size: 24px;
      line-height: 120%;
      margin: 10px 0;
    }
    
    & .buttonMobile{
      margin: 24px auto 0 auto;
    }
  }
`

export default StyledCalculator;