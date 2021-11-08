import styled from "styled-components";
import Accordion from "@mui/material/Accordion";

const StyledAccordionExpress = styled(Accordion)`
  &&& {
    box-shadow: none;
    width: 100%;
    padding: 0;
    border-top: 1px #E0E0E0 solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  
  & .MuiTypography-root{
    font-family: Rubik;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
  
  & .MuiAccordionSummary-content{
    justify-content: space-between;
  }

  & .MuiPaper-root{
    width: 100px;
  }

  & .MuiAccordionSummary-content{
    margin: 24px 0;
  }

`

export default StyledAccordionExpress;