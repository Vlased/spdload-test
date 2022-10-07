import React from 'react'
import Text from 'ui/text/Text'

interface ITourDescription {
    missionName: string,
}

const TourDescription: React.FC<ITourDescription> = (props) => {
    return (
        <>
            <Text
                fontFamily="Syne"
                weight={700}
                size="22px"
                color="#1E1E1E"
                uppercase={true}
            >
                {props.missionName}
            </Text>
            <Text
                weight={300}
                size="16px"
                color="#556B84"
            >
                Lorem ipsum dolor sit amet consectetur adipiscing elit
            </Text>
        </>
    )
}

export default TourDescription