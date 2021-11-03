import styled from 'styled-components';
import React from "react";

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

export interface Props  {
    children: React.ReactNode,
    className?: string
}

const Button:React.FC<Props> = ({children,className})=>{
    return(
        <StyledButton className={className}>{children}</StyledButton>
    )
}

export default Button;