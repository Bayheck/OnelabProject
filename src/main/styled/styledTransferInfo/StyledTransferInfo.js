import styled from "styled-components";

const StyledTransferInfo = styled.div`
  &{
    margin: 0 auto;
    max-width: 1224px;
    width: 100%;
  }
  
  & .twoBlocks{
    display: flex;
    justify-content: space-between;
  }
  
  & .block{
    max-width: 600px;
    width: 100%;
    background: #F2F2F2;
    border-radius: 4px;
    padding: 32px;
    box-sizing: border-box;
    position: relative;
  }
  
  & .content{
    width: 280px;
  }
  
  h5{
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    margin: 0 0 16px 0;
  }
  
  & .button{
    padding: 14px 32px;
    background: #FFFFFF;
    border-radius: 4px;
    color: #0E2B91;
    font-family: Rubik;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    border: none;
    margin-top: 97px;
  }
  
  span{
    font-size: 16px;
    line-height: 24px;
  }
  
  Button{
    margin-top: 24px;
  }
  
  .worldImg{
    position: absolute;
    right: 24px;
    top: 54px;
  }
  
  .phoneImg{
    position: absolute;
    top: 32px;
    right: 62px;
  }
  
  .threeBlocks{
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }
  
  .questionBlock{
    max-width: 392px;
    width: 100%;
    background: #F2F2F2;
    border-radius: 4px;
    padding: 32px;
    box-sizing: border-box;
    position: relative;
  }
  
  h6{
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin: 22px 0 16px 0;
  }
`

export default StyledTransferInfo;