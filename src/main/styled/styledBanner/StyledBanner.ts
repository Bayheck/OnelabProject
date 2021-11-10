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
  
  .mobileButton{
    display: none;
  }

  @media screen and (max-width: 415px) {
    && {
      justify-content: space-between;
    }
    
    .content{
      display: block;
      padding: 32px 0 40px 0;
    }

    img {
      width: 240px;
    }

    .bankName {
      display: none;
    }

    .prize {
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }

    .catch {
      font-size: 16px;
      text-align: center;
    }

    .detailsButton {
      display: none;
    }
    
    .mobileButton{
      display: block;
      border: none;
      background: #9D2550;
      color: #FFFFFF;
      padding: 15px 34px;
      line-height: 16px;
      margin: 0 auto;
      border-radius: 4px;
      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      font-size: 16px;
    }

    .imgBlock {
      display: flex;
      margin: 50px 0 32px 0;
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