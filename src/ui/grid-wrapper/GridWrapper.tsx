import React from 'react';
import StyledGridWrapper from "./GridWrapper.styled";

export interface IGridWrapperProps {
    children: React.ReactNode,
    width?: string,
}

const GridWrapper: React.FC<IGridWrapperProps> = (props) => {
    return (
        <StyledGridWrapper {...props}>
            {props.children}
        </StyledGridWrapper>
    )
}

export default GridWrapper