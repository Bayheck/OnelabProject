import styled from "styled-components";
import Accordion from "@mui/material/Accordion";

const StyledAccordionFooter = styled(Accordion)`
  && {
    box-shadow: none;
    background: #F8F8F8;
    width: 360px;
    padding: 0;
    display: none;
  }
  
  & .MuiTypography-root{
    font-family: Rubik;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
  }
  
  & .MuiAccordionSummary-content{
    justify-content: space-between;
  }

  & .MuiPaper-root{
    width: 100px;
  }

  @media screen and (max-width: 415px) {
    &&{
      display: block;
      width: 365px;
    }
  }

  @media screen and (max-width: 320px) {
    &&{
      width: 320px;
    }
  }
`

export default StyledAccordionFooter;