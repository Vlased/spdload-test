import React from 'react'
import FlexWrapper from 'ui/flex-wrapper/FlexWrapper'
import Image from 'ui/image/Image'

interface ITourImageProps {
    image: string,
}

const TourImage: React.FC<ITourImageProps> = (props) => {
    return (
        <FlexWrapper
            width="100%"
            height="60%"
        >
            <Image
                width="100%"
                height="100%"
                objectFit="cover"
                src={props.image}
            />
        </FlexWrapper>
    )
}

export default TourImage