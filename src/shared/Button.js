import styled from 'styled-components';

const StyledButton = styled.button`
  background: #1E2A41;
  border-radius: 4px;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  padding: 14px 32px 14px 32px;
  border: none;
`

const Button = ({children})=>{
    return(
        <StyledButton>{children}</StyledButton>
    )
}

export default Button;