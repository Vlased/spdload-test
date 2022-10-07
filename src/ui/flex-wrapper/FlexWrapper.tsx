import React from 'react'
import StyledFlexWrapper from './FlexWrapper.styled';

export interface IFlexWrapperProps {
  children: React.ReactNode;
  direction?: string;
  gap?: string;
  justify?: string;
  items?: string;
  width?: string;
  height?: string;
  border?: string;
  textAlign?: string;
  margin?: string;
  position?: string;
  ref? :React.RefObject<HTMLDivElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const FlexWrapper: React.FC<IFlexWrapperProps> = (props) => {
  return (
    <StyledFlexWrapper {...props}/>
  )
}

export default FlexWrapper