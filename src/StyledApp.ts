import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  color: #1E2A41;
  overflow-x: hidden; 
  overflow-y: hidden;
  
  & div{
    justify-content: center;
    font-family: 'Rubik', sans-serif;
  }
  
  & .allWrapper{
    width: 100%;
  }
`

export default StyledApp;