import React from 'react';
import StyledButton from "./Button.styled";

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void | ((e: any) => void);
  background?: string,
  width?: string,
  height?: string,
  border?: string,
  activeColor?: string,
  margin?: string,
  zIndex?: string, 
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default Button