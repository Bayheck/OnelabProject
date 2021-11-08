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
`

export default StyledExpressCalculatorMiniInput;