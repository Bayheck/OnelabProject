import styled from "styled-components";

const StyledMonthly = styled.div`
  & .monthlyPayment{
    font-weight: 500;
    font-size: 30px;
    color: #9D2550;
    margin: 16px 0 24px 0;
  }

  @media screen and (max-width: 415px) {
    & .monthlyPayment{
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      margin: 10px 0;
    }
  }
`
export default StyledMonthly;