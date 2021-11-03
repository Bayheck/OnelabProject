import styled from "styled-components";

const StyledCallNumber = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  width: 59px;
  
  & span{
    margin-left: 3px;
  }

  @media screen and (max-width: 415px) {
    && {
      display: none;
    }

  }
`

export default StyledCallNumber;