import StyledMonthly from "../styled/styledCalculator/StyledMonthly";
import React from "react";

interface Props  {
    money: number|number[];
    time: number|number[];
    isClient: boolean;
}

const Monthly:React.FC<Props> = ({money, time, isClient}) =>{
    const percent:number = isClient ? 1.17 : 1.25;
    let monthlyPayment:number = 0;
    if(typeof money === "number" && typeof time ==="number") monthlyPayment = Math.ceil(money*percent/time);

    return(
        <StyledMonthly>
            <div className="monthlyPayment">
                {`${new Intl.NumberFormat('ru-RU').format(monthlyPayment)} ₸`}
            </div>
        </StyledMonthly>
    )
}

export default Monthly;