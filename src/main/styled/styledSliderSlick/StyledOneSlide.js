import styled from "styled-components";

const StyledOneSlide = styled.div`
  &&{
    display: flex;
    justify-content: space-between;
    color:#FFFFFF;
    padding: 0 1px 0 1px;
  }

  .bankName{
    margin: 32px 0;
    line-height: 14px;
    font-size: 12px;
  }

  span{
    text-decoration-line: underline;
  }

  .prize{
    margin: 0 0 24px 0;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
  }

  .catch{
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }

  .detailsButton{
    margin: 70px 0 0 0;
    background: #FFFFFF;
    border-radius: 4px;
    color: #9D2550;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    padding: 18px 32px 18px 32px;
    border: none;
  }

  .imgBlock{
    margin-right: 32px;
  }
`

export default StyledOneSlide;