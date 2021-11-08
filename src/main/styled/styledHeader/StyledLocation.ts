import styled from "styled-components";

const StyledLocation = styled.div`
  font-size: 14px;
  line-height: 17px;
  width: 130px;
  svg{
    display: none;  
  }
  
  @media screen and (max-width: 415px) {
    & {
      display: none;
    }
  }
`

export default StyledLocation;