import {Dialog} from "@mui/material";
import {useState} from "react";
import StyledModalCredit from "../styled/styledExpressCalculator/StyledModalCredit";
import Button from "../../shared/Button";

export interface CreditProps {
    loan: number|number[];
    time: number;
    isClient: boolean;
    number: string;
    income:string;
    index: string;
    validNumber:boolean;
    validIncome:boolean;
    isValid:boolean;
}

const ExpressCalculatorCreditModal = (Props: CreditProps)=>{
    const {loan, time, isClient, number,income,index, validNumber, validIncome, isValid} = Props;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        if(validIncome && !validNumber && !isValid && index.length !== 0 && income.length !== 0 && number.length !== 0){
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <Button type = {"button"} pink = {true} onClick={handleClickOpen}>
                Оформить кредит
            </Button>
            <Dialog onClose={handleClose} open={open}>
                <StyledModalCredit>
                    <h3>Credit Info</h3>
                    <div className="block">
                        Loan Money: <div className="value" >{loan}</div>
                    </div>
                    <div className="block">
                        Time: <div className="value" >{time}</div>
                    </div>
                    <div className="block">
                        You are Client: <div className="value" >{isClient?'Yes':'No'}</div>
                    </div>
                    <div className="block">
                        Your Number: <div className="value" >{number}</div>
                    </div>
                    <div className="block">
                        Your Income: <div className="value" >{income}</div>
                    </div>
                    <div className="block">
                        Your Index: <div className="value" >{index}</div>
                    </div>
                    <Button onClick={handleClose} pink={false}>Оформить кредит</Button>
                </StyledModalCredit>
            </Dialog>
        </>
    )
}

export default ExpressCalculatorCreditModal;