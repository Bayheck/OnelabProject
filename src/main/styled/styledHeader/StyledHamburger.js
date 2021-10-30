import styled from "styled-components";

const StyledHamburger = styled.div`
    &{
      display: none;
      margin-right: 26px;
    }
  
    span{
      display: block;
      width: 20px;
      height: 2px;
      margin: 4px auto;
      background: rgba(157, 37, 80, 1);
      border-radius: 4px;
    }

    @media screen and (max-width: 415px) {
      &{
        display: block;
      }
    }
`

export default StyledHamburger;