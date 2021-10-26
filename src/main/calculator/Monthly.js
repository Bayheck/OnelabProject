import styled from 'styled-components';

const StyledMonthly = styled.div`
  & .monthlyPayment{
    font-weight: 500;
    font-size: 30px;
    color: #9D2550;
    margin: 16px 0 24px 0;
  }
`

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