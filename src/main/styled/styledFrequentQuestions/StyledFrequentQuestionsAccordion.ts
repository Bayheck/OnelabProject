import { Accordion } from "@mui/material";
import styled from "styled-components";

const StyledFrequentQuestionsAccordion = styled(Accordion)`
  &&&{
    box-shadow: none;
    border-top: 1px #E0E0E0 solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  & .MuiAccordionSummary-content{
    justify-content: left;
    margin: 26px 0;
  }

  & .MuiTypography-root{
    font-family: Rubik;
    font-size: 16px;
    line-height: 19px;
    font-weight: normal;
    color: #303030;
  }
`

export default StyledFrequentQuestionsAccordion;