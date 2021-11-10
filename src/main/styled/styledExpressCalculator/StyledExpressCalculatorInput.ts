import styled from "styled-components";
import {FormControl} from "@mui/material";


const StyledExpressCalculatorInput = styled(FormControl)`
  &&{
    width: 600px;
    margin-top: 32px;
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
    }
  }
`

export default StyledExpressCalculatorInput;