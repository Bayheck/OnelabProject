import styled from "styled-components";

const StyledBanner = styled.div`
  && {
    display: flex;
    justify-content: center;
    background: rgba(242, 242, 242, 1);
    padding: 0 1px 0 1px;
    box-sizing: border-box;
  }
  
  .content{
    max-width: 1224px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .bankName {
    margin: 32px 0;
    line-height: 14px;
    font-size: 12px;
  }

  span {
    text-decoration-line: underline;
  }

  .prize {
    margin: 0 0 24px 0;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
  }

  .catch {
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }

  .detailsButton {
    margin: 70px 0 0 0;
    background: #9D2550;
    border-radius: 4px;
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    padding: 18px 32px 18px 32px;
    border: none;
  }

  .imgBlock {
    margin:46px 32px 18px 0;
  }

  @media screen and (max-width: 415px) {
    && {
      justify-content: space-between;
    }

    img {
      width: 138px;
    }

    .bankName {
      display: none;
    }

    .prize {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .catch {
      font-size: 16px;
      width: 150px;
    }

    .detailsButton {
      background: #9D2550;
      color: #FFFFFF;
      padding: 15px 34px;
      line-height: 16px;
      margin-top: 70px;
    }

    .imgBlock {
      display: flex;
      margin-right: 24px;
      align-items: center;
    }
  }

  @media screen and (max-width: 320px) {
    .prize {
      font-size: 21px;
    }

    .detailsButton {
      margin-top: 42px;
    }
  }
  
  
`

export default StyledBanner;