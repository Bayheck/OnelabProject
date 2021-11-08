import StyledExpressCalculator from "../styled/styledExpressCalculator/StyledExpressCalculator";
import StyledSlider from "../styled/styledCalculator/StyledSlider";
import React, {useState} from "react";
import StyledSwitch from "../styled/styledCalculator/StyledSwitch";
import ExpressCalculatorInput from "./ExpressCalculatorInput";
import StyledExpressCalculatorMiniInput from "../styled/styledExpressCalculator/StyledExpressCalculatorMiniInput";
import ExpressCalculatorInfoModal from "./ExpressCalculatorInfoModal";
import ExpressCalculatorCreditModal from "./ExpressCalculatorCreditModal";
import NumberFormat from 'react-number-format';

const DEFAULT_LOAN = 7000000;
const DEFAULT_TIME = 6;
const Months = [6, 12, 18, 24, 36, 48, 60];

const ExpressCalculator = ()=>{
    const [loan, setLoan] = useState<number|number[]>(DEFAULT_LOAN);
    const [time, setTime] = useState<number>(DEFAULT_TIME);
    const [isClient, setIsClient] = useState<boolean>(false);
    const [showIndex, setShowIndex] = useState<boolean>(false);
    const [index, setIndex] = useState<string>('');
    const [isValid, setisValid] = useState<boolean>(false);
    const [number, setNumber] = useState<string>('');
    const [income, setIncome] = useState<string>('');
    const [validNumber,setValidNumber] = useState<boolean>(false);
    const [validIncome,setValidIncome] = useState<boolean>(true);

    const percent:number = isClient ? 1.17 : 1.25;
    let monthlyPayment:number = 0;
    if(typeof loan === "number" && typeof time ==="number") monthlyPayment = Math.ceil(loan*percent/time);

    const validate = (input:string):void=>{
        if(input.length < 12){
            setIndex(input);
            setisValid(true);
            if (input.length === 11){
                setisValid(false);
            }
        }
    }

    const validateNumber = (input:string):void=>{
        setNumber(input);
        setValidNumber(true);
        if(input[9] !== undefined){
            setValidNumber(false);
        }
    }

    const validateIncome = (input:string):void=>{
        if(input.length > 0){
            setValidIncome(true);
        }else
            setValidIncome(false);
        setIncome(input);
    }

    return(
        <StyledExpressCalculator>
            <h3>Рассчитать Экспресс-кредит</h3>
            <div className="body">
                <div className="creditDetails">
                    Сумма кредита
                    <div className="mobileDisplay">{typeof loan === "number" && Intl.NumberFormat('ru-RU').format(loan)}₸</div>
                </div>
                <div className="slider">
                    <StyledSlider
                        aria-label="Loan"
                        min={100000}
                        max={7000000}
                        step={10000}
                        value={loan}
                        onChange={(event, value) =>{setLoan(value)}}
                    />
                </div>
                <div className="loanLimits">
                    <div>100 000 ₸</div>
                    <div>7 000 000 ₸</div>
                </div>
                <div className="creditDetails">Срок кредита</div>
                <div className="time">
                    {Months.map((value) =>(
                        <button className={`timeButton ${time === value && 'chosenButton'}`} onClick={() => setTime((value))}>{value}</button>
                    ))}
                </div>
                <div className="loanLimits">Срок в месяцах</div>
                <hr/>
                <div className="calculation">
                    <div className="info">
                        <div className="monthlyDisplay">Ежемесячный платеж
                            <div className="monthlyMoney">{Intl.NumberFormat('ru-RU').format(monthlyPayment)}</div>
                        </div>
                        <div className="monthlyDisplay">Ставка вознаграждения
                            <div className="monthlyMoney">{isClient? '17%': '25%'}</div>
                        </div>
                    </div>
                    <div className="switch">
                        <div className="incomeForte">
                            <StyledSwitch
                                onChange={() =>{setIsClient(!isClient)}}
                            />
                            <div className="iReceive">Я получаю запрплату по карте ForteBank</div>
                        </div>
                    </div>
                </div>
                <ExpressCalculatorInput index={index} isValid={isValid} showIndex={showIndex} setShowIndex={setShowIndex} validate={validate}/>
                <form>
                    <div className="miniContainer">
                        <NumberFormat
                            error = {validNumber}
                            variant="outlined"
                            customInput={StyledExpressCalculatorMiniInput}
                            format="+7 (###) ###-##-##"
                            value = {number}
                            onValueChange={(event)=>{validateNumber(event.value)}}
                            label="Номер телефона"
                            required={true}
                            mask="_"
                        />
                        <StyledExpressCalculatorMiniInput
                            error = {!validIncome}
                            required={true}
                            type={'number'}
                            label="Основной ежемесяч. доход, ₸"
                            variant="outlined"
                            value= {income}
                            onChange={(event)=>{validateIncome(event.target.value)}}
                        />
                    </div>
                    <div className="contract">
                        Продолжая я подтверждаю, что ознакомился с <span className="contractConditions"><ExpressCalculatorInfoModal/></span> и даю согласие на обработку своих персональных данных
                    </div>
                    <div className="additionalInfo">
                        Для точного расчета необходимо оставить заявку
                    </div>
                    <ExpressCalculatorCreditModal
                        loan={loan} time={time} isClient={isClient}
                        number={number} income={income}
                        index={index} validNumber={validNumber}
                        validIncome={validIncome} isValid={isValid}
                    />
                </form>
            </div>
        </StyledExpressCalculator>
    )
}

export default ExpressCalculator;