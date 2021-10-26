import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import Monthly from "./Monthly";
import Button from "../../shared/Button";
import React, { useState,useEffect } from 'react';

const StyledSwitch = styled(Switch)`
  &&{
    padding: 0;
    height: auto;
    width: auto;
    margin-right:16px;
  }
  & .MuiSwitch-thumb{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: none;
    background: #999999;
    position: absolute;
    top: 3px;
    left: 3px;
  }
  
  & .MuiButtonBase-root .MuiSwitch-input{
    top: 3px;
    left: 3px;
    width: 100%;
  }

  & .MuiSwitch-switchBase .MuiTouchRipple-root{
    display:none;
  }
 
  & .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked{
    background-color: rgba(0,0,0,0);
    transform: translateX(15px);
  }  
  
  & .MuiSwitch-track{
    width: 34px;
    height: 20px;
    border: 1px solid #999999;
    opacity: 1;
    background: #FFFFFF;
    border-radius: 16px;
    box-sizing: content-box;
  }

  & .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track{
    background-color: rgba(157, 37, 80, 1);
    opacity: 1;
  }
`

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

const Calculator = () =>{
    const [loan, setLoan] = useState(7000000);
    const [time, setTime] = useState(8);

    const year = Math.floor(time / 12);
    let timeYear;

    //Deciding which term to use after year
    if(year === 1){
        timeYear = ' год';
    } else if(year > 1 && year < 5){
        timeYear = ' года';
    }else{
        timeYear = ' лет';
    }

    const YearOfLoan = year === 0 ? '': `${year + timeYear}`;
    const MonthOfLoan = time % 12 === 0 ? '': `${time % 12} месяцев`;

    return(
        <StyledCalculator>
            <div className="header">
                <h3>Кредиты на любые цели</h3>
                <span>Предварительный расчет не является публичной офертой</span>
            </div>
            <div className="content">
               <div>
                   <div className="creditDetails">Сколько вам нужно?</div>
                   <div className="slider">
                       <Slider
                           aria-label="Loan"
                           min={10000}
                           max={10000000}
                           step={10000}
                           value={loan}
                           onChange={(event, val) => setLoan(val)}
                           sx = {{
                               width: 631,
                               marginRight: '16px',
                               '& .MuiSlider-root':{
                                   borderRadius: '4px',
                               },
                               '& .MuiSlider-track':{
                                   color: 'rgba(30, 42, 65, 1)',
                                   height: '4px',
                                   border: 'none',
                               },
                               '& .MuiSlider-rail':{
                                   color: 'rgba(255, 255, 255, 1)',
                                   height: '4px',
                               },
                               '& .MuiSlider-thumb':{
                                   width: '24px',
                                   height: '24px',
                                   backgroundColor: 'rgba(255, 255, 255, 1)',
                                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
                               },
                               '& .MuiSlider-thumb::after':{
                                   borderRadius: '50%',
                                   width: '10px',
                                   height: '10px',
                                   backgroundColor: 'rgba(157, 37, 80, 1)',
                               },
                               '& .Mui-active::after':{
                                   backgroundColor: 'green',
                               }
                           }}
                       />
                       {new Intl.NumberFormat('ru-RU').format(loan)}
                   </div>

                   <div className="loanLimits">
                       <div>10 000 ₸</div>
                       <div>10 000 000 ₸</div>
                   </div>
                   <div className="creditDetails">Срок кредитования</div>
                   <div className="slider">
                       <Slider
                           aria-label="Loan"
                           min={6}
                           max={60}
                           value={time}
                           onChange={(event, val) => setTime(val)}
                           sx = {{
                               width: 631,
                               marginRight: '16px',
                               '& .MuiSlider-root':{
                                   borderRadius: '4px',
                               },
                               '& .MuiSlider-track':{
                                   color: 'rgba(30, 42, 65, 1)',
                                   height: '4px',
                                   border: 'none',
                               },
                               '& .MuiSlider-rail':{
                                   color: 'rgba(255, 255, 255, 1)',
                                   height: '4px',
                               },
                               '& .MuiSlider-thumb':{
                                   width: '24px',
                                   height: '24px',
                                   backgroundColor: 'rgba(255, 255, 255, 1)',
                                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
                               },
                               '& .MuiSlider-thumb::after':{
                                   borderRadius: '50%',
                                   width: '10px',
                                   height: '10px',
                                   backgroundColor: 'rgba(157, 37, 80, 1)',
                               },
                               '& .Mui-active::after':{
                                   backgroundColor: 'green',
                               }
                           }}
                       />
                       {`${YearOfLoan} ${MonthOfLoan}`}
                   </div>
                   <div className="loanLimits">
                       <div>6 месяцев</div>
                       <div>5 лет</div>
                   </div>
                   <div className="incomeForte">
                       <StyledSwitch/>
                       <div>Я получаю запрплату по карте ForteBank</div>
                   </div>
                   <span className="additionalInfo">Для точного расчета необходимо оставить заявку</span>
               </div>
                <div className="creditDisplay">
                    <div className="vertLine"></div>
                    <div className="innerCreditDisplay">
                        <div className="textForCredit">Ежемесячный платеж</div>
                        <div>
                            <Monthly time={time} money={loan}/>
                        </div>
                        <div className="textForCredit">Ставка вознаграждения</div>
                        <div className="creditPercents">17%</div>
                        <Button>Оформить кредит</Button>
                    </div>
                </div>
            </div>
        </StyledCalculator>
    )
}

export default Calculator;