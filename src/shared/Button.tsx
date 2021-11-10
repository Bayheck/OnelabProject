import styled from 'styled-components';
import React from "react";

interface ButtonProps {
    readonly pink?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => props.pink ? 'rgba(157, 37, 80, 1)': '#1E2A41'};
  margin-left: ${(props)=> props.pink? '24px':''};
  border-radius: 4px;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  padding: 14px 32px 14px 32px;
  border: none;
  cursor: pointer;
`

export interface Props  {
    children: React.ReactNode,
    className?: string
    onClick?: ()=>void;
    pink?:boolean;
    type?:"button"|"submit";
}

const Button:React.FC<Props> = ({children,className,onClick,pink=false, type})=>{
    return(
        <StyledButton type={type} pink = {pink} onClick={onClick} className={className}>{children}</StyledButton>
    )
}

export default Button;