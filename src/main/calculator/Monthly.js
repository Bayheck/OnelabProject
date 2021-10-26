import StyledMonthly from "../styled/styledCalculator/StyledMonthly";

const Monthly = ({money, time, isClient}) =>{
    const percent = isClient ? 1.17 : 1.25;
    const monthlyPayment = Math.ceil(money*percent/time);

    return(
        <StyledMonthly>
            <div className="monthlyPayment">
                {`${new Intl.NumberFormat('ru-RU').format(monthlyPayment)} ₸`}
            </div>
        </StyledMonthly>
    )
}

export default Monthly;