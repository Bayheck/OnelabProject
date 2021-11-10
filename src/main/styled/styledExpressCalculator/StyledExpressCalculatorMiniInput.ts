import {TextField} from "@mui/material";
import styled from "styled-components";

const StyledExpressCalculatorMiniInput = styled(TextField)`
  && {
    width: 288px;
    background: #FFFFFF;
  }
  
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (max-width: 415px) {
    &&{
      max-width: 276px;
      width: 100%;
      margin-bottom: 24px;
    }
  }
`

export default StyledExpressCalculatorMiniInput;