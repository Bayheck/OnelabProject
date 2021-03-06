import styled from "styled-components";

const StyledInfoTabs = styled.div`
    &{
      display: flex;
      justify-content: center;
      margin: 64px 0 48px 0;
    }
    
    .tab{
      padding: 16px;
      background: #F2F2F2;
      color: #1E2A41;
      font-size: 16px;
      line-height: 24px;
      margin-right: 4px;
      width: 180px;
      text-align: center;
      box-sizing: border-box;
    }
    
    .chosen{
      color: #F2F2F2;
      background-color: #1E2A41;
    }

  @media screen and (max-width: 415px) {
    &&{
      justify-content: left;
      padding-left: 14px;
    }
    
    .tab{
      padding: 8px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 24px;
    }
    
    .mobile{
      display: none;
    }
  }
`

export default StyledInfoTabs;