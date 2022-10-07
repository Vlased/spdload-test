import React from 'react';
import Image from 'ui/image/Image';
import StyledGreySquare from "./GreySquare.styled";

export interface IGraySquareProps {
    imageLink: string,
    isPink?: boolean
}

const GraySquare: React.FC<IGraySquareProps> = (props) => {
    return (
        <StyledGreySquare {...props}>
            <Image
                width="auto"
                height="auto"
                src={props.imageLink}
            />
        </StyledGreySquare>
    )
}

export default GraySquare