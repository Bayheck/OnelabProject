import styled from "styled-components";
import dollar from "../../../assets/Converter/dollar.svg";
import euro from "../../../assets/Converter/euro.svg";
import pound from "../../../assets/Converter/pound.svg";
import rub from "../../../assets/Converter/rub.svg";
import tenge from "../../../assets/Converter/tenge.svg";
import arrows from "../../../assets/MobileVersion/arrows.svg";

const StyledConverter = styled.div`
  &{
    max-width: 1224px;
    width: 100%;
    margin: 170px auto 0 auto;
  }
  
  h3{
    font-weight: 500;
    font-size: 30px;
    margin: 0 0 24px 0;
  }
  
  & .currencyBlock{
    max-width: 542px;
    width: 100%;
    color: #303030;
    font-weight: normal;
    font-size: 20px;
    line-height: 100%;
  }
  
  & .heading{
    margin-left: 312px;
    display: flex;
    justify-content: left;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
  
  & .sell{
    margin-left: 80px;
  }
  
  & .horizontal{
    display: flex;
    justify-content: left;
    padding: 16px 32px;
    background: rgba(242, 242, 242, 1);
  }
  
  & .horizontal:nth-child(odd){
    background: white;
  }
  
  & .current{
    margin-left: 22px;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
  }
  
  & .buy{
    margin-left: 206px;
    margin-right: 62px;
  }
  
  & .sellCur{
    width: 70px;
    margin-left: auto;
  }
  
  & .main{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 24px 0 66px 0;
    flex-wrap: wrap;
  }
  
  & .currencyCalculate{
    padding: 24px 64px 32px 64px;
    max-width: 591px;
    width: 100%;
    background: rgba(245, 245, 245, 1);
    box-sizing: border-box;
    position: relative;
  }
  
  & .convert{
    position: absolute;
    top: 60px;
    left: -43px;
    background: rgba(245, 245, 245, 1);
    width: 87px;
    height: 87px;
    border-radius: 50%;
  }
  
  & .convertButton{
    position: absolute;
    top: 13px;
    left: 13px;
    width: 61px;
    height: 61px;
    border-radius: 50%;
    padding: 0;
    border: none;
    color: white;
    background: #1E2A41;
  }
  
  & .convertButton:hover{
    opacity: 0.9;
    background: #1E2A41;
  }
  
  h5{
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    margin: 0;
  }
  
  & .input{
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(115, 115, 115, 1);
    margin-top: 24px;
    display: flex;
    justify-content: left;
  }
  
  input:focus{
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    outline: none;
  }

  input{
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    padding: 0;
    border: none;
    background: rgba(245, 245, 245, 1);
    display: block;
    width: 235px;
    margin-right: 30px;
    -webkit-appearance: textfield;
       -moz-appearance: textfield;
            appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  button{
    border: none;
    background-color: rgba(245, 245, 245, 1);
    cursor: pointer;
    margin-right: 20px;
  }
  
  button:active{
    opacity: 8;
  }
  
  & .dollar{
    width: 12px;
    height: 20px;
    background-color: #737373;
    mask-image: url(${dollar});
  }
  
  & .euro{
    background-color: #737373;
    mask-image: url(${euro});
    width: 19px;
    height: 22px;
  }
  
  & .rub{
    background-color: #737373;
    mask-image: url(${rub});
    width: 14px;
    height: 20px;
  }

  & .pound{
    background-color: #737373;
    mask-image: url(${pound});
    width: 18px;
    height: 20px;
  }

  & .tenge{
    width: 16px;
    height: 18px;
    background-color: #737373;
    mask-image: url(${tenge});
  }
  
  & .chosen{
    background-color: black;
  }

  @media screen and (max-width: 415px) {
    &{
      margin: 70px auto 0 auto;
      width: 100%;
      max-width: 328px;
    }
    
    & .buy{
      margin-left: 58px;
      margin-right: 40px;
    }
    
    & .heading{
      margin-left: 156px;
    }
    
    & .horizontal{
      padding: 16px 0 16px 20px;
    }
    
    & .sell{
      margin-left: 54px;
    }
    
    h3{
      font-size: 24px;
    }
    
    h5{
      font-size: 18px;
    }
    
    & .currencyBlock{
      margin-bottom: 10px;
    }
    
    & .currencyCalculate{
      margin-left: 20px;
      padding: 24px 16px 26px 46px;
      border-radius: 4px;
      max-width: 305px;
    }
    
    & .input{
      display: block;
      border: none;
    }
    
    input{
      font-size: 18px;
      margin-bottom: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(115, 115, 115, 1);
    }

    input:focus{
      font-size: 18px;
    }
    
    & .convert{
      top: 0;
      left: -24px;
      top: 50%;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
    }
    
    & .convertButton{
      width: 34px;
      height: 34px;
      background: #1E2A41 url(${arrows}) 9px 9px no-repeat;
      top: 7px;
      left: 7px;
    }
    
    & .main{
      margin-bottom: 40px;
    }
  }
`

export default StyledConverter;