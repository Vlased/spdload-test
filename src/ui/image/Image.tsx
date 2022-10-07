import React from 'react';
import StyledImage from './Image.styled';

export interface IImageProps {
    src: string,
    width: string,
    height: string,
    objectFit?: string,
    difference?: boolean
}

const Image: React.FC<IImageProps> = (props) => {
  return (
    <StyledImage {...props}/>
  )
}

export default Image