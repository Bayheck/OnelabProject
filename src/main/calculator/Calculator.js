import React, {useState} from 'react';
import StyledSlider from "../styled/styledCalculator/StyledSlider";
import StyledSwitch from "../styled/styledCalculator/StyledSwitch";
import StyledCalculator from "../styled/styledCalculator/StyledCalculator";
import Monthly from "./Monthly";
import Button from "../../shared/Button";

const Calculator = () =>{
    const [loan, setLoan] = useState(7000000);
    const [time, setTime] = useState(8);
    const [isClient, setIsClient] = useState(false);

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
               <div className="sliderMenu">
                   <div className="creditDetails">Сколько вам нужно?</div>
                   <div className="slider">
                       <StyledSlider
                           aria-label="Loan"
                           min={10000}
                           max={10000000}
                           step={10000}
                           value={loan}
                           onChange={(event, val) => setLoan(val)}
                       />
                       <div className="sliderValue">{new Intl.NumberFormat('ru-RU').format(loan)}</div>
                   </div>
                   <div className="loanLimits">
                       <div>10 000 ₸</div>
                       <div>10 000 000 ₸</div>
                   </div>

                   <div className="creditDetails">Срок кредитования</div>
                   <div className="slider">
                       <StyledSlider
                           aria-label="Loan"
                           min={6}
                           max={60}
                           value={time}
                           onChange={(event, val) => setTime(val)}
                       />
                       <div className="sliderValue">{`${YearOfLoan} ${MonthOfLoan}`}</div>
                   </div>
                   <div className="loanLimits">
                       <div>6 месяцев</div>
                       <div>5 лет</div>
                   </div>

                   <div className="incomeForte">
                       <StyledSwitch
                            onChange={() =>{setIsClient(!isClient)}}
                       />
                       <div>Я получаю запрплату по карте ForteBank</div>
                   </div>
                   <span className="additionalInfo">Для точного расчета необходимо оставить заявку</span>
               </div>

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