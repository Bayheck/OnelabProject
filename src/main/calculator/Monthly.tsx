import StyledMonthly from "../styled/styledCalculator/StyledMonthly";
import React from "react";

export interface Props  {
    money: number;
    time: number;
    isClient: boolean;
}

const Monthly:React.FC<Props> = ({money, time, isClient}) =>{
    const percent:number = isClient ? 1.17 : 1.25;
    const monthlyPayment:number = Math.ceil(money*percent/time);

    return(
        <StyledMonthly>
            <div className="monthlyPayment">
                {`${new Intl.NumberFormat('ru-RU').format(monthlyPayment)} ₸`}
            </div>
        </StyledMonthly>
    )
}

export default Monthly;