import React, {useState} from 'react';
import StyledSlider from "../styled/styledCalculator/StyledSlider";
import StyledSwitch from "../styled/styledCalculator/StyledSwitch";
import StyledCalculator from "../styled/styledCalculator/StyledCalculator";
import Monthly from "./Monthly";
import Button from "../../shared/Button";

const DEFAULT_LOAN = 7000000;
const DEFAULT_TIME = 8;

const Calculator = () =>{
    const [loan, setLoan] = useState<number>(DEFAULT_LOAN);
    const [time, setTime] = useState<number>(DEFAULT_TIME);
    const [isClient, setIsClient] = useState<boolean>(false);

    const year:number = Math.floor(time / 12);
    let timeYear:string;

    if(year === 1){
        timeYear = ' год';
    } else if(year > 1 && year < 5){
        timeYear = ' года';
    }else{
        timeYear = ' лет';
    }

    const YearOfLoan:string = year === 0 ? '': `${year + timeYear}`;
    const MonthOfLoan:string = time % 12 === 0 ? '': `${time % 12} месяцев`;

    const handleLoanChange = (event: any, value:any):void =>{
        setLoan(value);
    }

    const handleTimeChange = (event: any, value:any):void =>{
        setTime(value);
    }

    return(
        <StyledCalculator>
            <div className="header">
                <h3>Кредиты на любые цели</h3>
                <span>Предварительный расчет не является публичной офертой</span>
            </div>
            <div className="content">
               <div className="sliderMenu">
                   <div className="creditDetails">Сколько вам нужно? <span className={"mobileDisplay"}>{Intl.NumberFormat('ru-RU').format(loan)}₸</span></div>
                   <div className="slider">
                       <StyledSlider
                           aria-label="Loan"
                           min={10000}
                           max={10000000}
                           step={10000}
                           value={loan}
                           onChange={handleLoanChange}
                       />
                       <div className="sliderValue">{Intl.NumberFormat('ru-RU').format(loan)}</div>
                   </div>
                   <div className="loanLimits">
                       <div>10 000 ₸</div>
                       <div>10 000 000 ₸</div>
                   </div>

                   <div className="creditDetails">Срок кредитования <span className={"mobileDisplay"}>{`${YearOfLoan} ${MonthOfLoan}`}</span></div>
                   <div className="slider">
                       <StyledSlider
                           aria-label="Loan"
                           min={6}
                           max={60}
                           value={time}
                           onChange={handleTimeChange}
                       />
                       <div className="sliderValue">{`${YearOfLoan} ${MonthOfLoan}`}</div>
                   </div>
                   <div className="loanLimits">
                       <div>6 месяцев</div>
                       <div>5 лет</div>
                   </div>

                   <div className="creditDisplayMobile">
                       <div>Ежемесячный платеж <Monthly time={time} money={loan} isClient={isClient}/></div>
                       <div>Ставка вознаграждения <div className="creditPercents">{isClient? '17%': '25%'}</div></div>
                   </div>

                   <div className="incomeForte">
                       <StyledSwitch
                            onChange={() =>{setIsClient(!isClient)}}
                       />
                       <div>Я получаю запрплату по карте ForteBank</div>
                   </div>
                   <span className="additionalInfo">Для точного расчета необходимо оставить заявку</span>
               </div>
                <Button className="buttonMobile">Оформить кредит</Button>
                <div className="creditDisplay">
                    <div className="vertLine"></div>
                    <div className="innerCreditDisplay">
                        <div className="textForCredit">Ежемесячный платеж</div>
                        <div>
                            <Monthly time={time} money={loan} isClient={isClient}/>
                        </div>
                        <div className="textForCredit">Ставка вознаграждения</div>
                        <div className="creditPercents">{isClient? '17%': '25%'}</div>
                        <Button>Оформить кредит</Button>
                    </div>
                </div>
            </div>
        </StyledCalculator>
    )
}

export default Calculator;