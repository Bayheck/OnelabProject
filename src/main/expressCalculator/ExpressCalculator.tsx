import StyledExpressCalculator from "../styled/styledExpressCalculator/StyledExpressCalculator";
import StyledSlider from "../styled/styledCalculator/StyledSlider";
import React, {useState} from "react";
import StyledSwitch from "../styled/styledCalculator/StyledSwitch";
import ExpressCalculatorInput from "./ExpressCalculatorInput";
import StyledExpressCalculatorMiniInput from "../styled/styledExpressCalculator/StyledExpressCalculatorMiniInput";
import ExpressCalculatorInfoModal from "./ExpressCalculatorInfoModal";
import ExpressCalculatorCreditModal from "./ExpressCalculatorCreditModal";
import NumberFormat from 'react-number-format';
import { ReactComponent as PlusIcon } from '../../assets/ExpressCalculator/first.svg';
import { ReactComponent as MinusIcon } from '../../assets/ExpressCalculator/second.svg';

const DEFAULT_LOAN = 7000000;
const DEFAULT_TIME = 6;
const INCREMENT_STEP = 10000;
const MAX_LOAN = 7000000;
const Months = [6, 12, 18, 24, 36, 48, 60];

const ExpressCalculator = ()=>{
    const [loan, setLoan] = useState<number|number[]>(DEFAULT_LOAN);
    const [validLoan, setValidLoan] = useState<boolean>(false);
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
    if(typeof loan === "number") monthlyPayment = Math.ceil(loan*percent/time);

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

    const validateLoan = (input:string):void=>{
        const loan = parseInt(input, 10);
        if(loan <= MAX_LOAN){
            setValidLoan(false);
        }else {
            setValidLoan(true);
        }
        setLoan(loan);
    }

    return(
        <StyledExpressCalculator>
            <h3>???????????????????? ????????????????-????????????</h3>
            <div className="body">
                <div className="creditDetails">
                    ?????????? ??????????????
                    <div className="mobileLoan">
                        <button onClick={():void =>{typeof loan === "number" && setLoan(loan - INCREMENT_STEP)}} className="mobileButtonLoan"><MinusIcon/></button>
                        <NumberFormat
                            error = {validNumber}
                            variant="outlined"
                            className={`mobileDisplay ${validLoan && 'errorMobileDisplay'}`}
                            value = {`${loan}`}
                            onValueChange={(event)=>{event.value !== '' ? validateLoan(event.value): setLoan(0)}}
                            thousandSeparator={' '}
                            suffix={'???'}
                        />
                        <button onClick={():void =>{typeof loan === "number" && loan + INCREMENT_STEP <= MAX_LOAN && setLoan(loan + INCREMENT_STEP)}} className="mobileButtonLoan"><PlusIcon/></button>
                    </div>
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
                    <div>100 000 ??? </div>
                    <div>7 000 000 ???</div>
                </div>
                <div className="creditDetails">???????? ??????????????</div>
                <div className="time">
                    {Months.map((value) =>(
                        <button className={`timeButton ${time === value && 'chosenButton'}`} onClick={() => setTime((value))}>{value}</button>
                    ))}
                </div>
                <div className="loanLimits">???????? ?? ??????????????</div>
                <hr/>
                <div className="calculation">
                    <div className="info">
                        <div className="monthlyDisplay">?????????????????????? ????????????
                            <div className="monthlyMoney">{Intl.NumberFormat('ru-RU').format(monthlyPayment)}</div>
                        </div>
                        <div className="monthlyDisplay">???????????? ????????????????????????????
                            <div className="monthlyMoney">{isClient? '17%': '25%'}</div>
                        </div>
                    </div>
                    <div className="switch">
                        <div className="incomeForte">
                            <StyledSwitch
                                onChange={() =>{setIsClient(!isClient)}}
                            />
                            <div className="iReceive">?? ?????????????? ?????????????????? ???? ?????????? ForteBank</div>
                        </div>
                    </div>
                </div>
                <div className="mobileOffer">
                    ?????????????????????????????? ???????????? ???? ???????????????? ??????????????
                    <div className="mobileOfferDetails">?????? ?????????????????? ?????????????? ????????????</div>
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
                            label="?????????? ????????????????"
                            required={true}
                            mask="_"
                        />
                        <StyledExpressCalculatorMiniInput
                            error = {!validIncome}
                            required={true}
                            type={'number'}
                            label="???????????????? ????????????????. ??????????, ???"
                            variant="outlined"
                            value= {income}
                            onChange={(event)=>{validateIncome(event.target.value)}}
                        />
                    </div>
                    <div className="contract">
                        ?????????????????? ?? ??????????????????????, ?????? ?????????????????????? ?? <span className="contractConditions"><ExpressCalculatorInfoModal/></span> ?? ?????? ???????????????? ???? ?????????????????? ?????????? ???????????????????????? ????????????
                    </div>
                    <div className="additionalInfo">
                        ?????? ?????????????? ?????????????? ???????????????????? ???????????????? ????????????
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