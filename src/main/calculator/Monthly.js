import StyledMonthly from "../styled/styledCalculator/StyledMonthly";

const Monthly = ({money, time}) =>{
    const percent = 1.17;
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