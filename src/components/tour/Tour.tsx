import React from 'react'
import FlexWrapper from 'ui/flex-wrapper/FlexWrapper'
import ITour from 'interfaces/tour';
import TourImage from './components/TourImage';
import TourDescription from './components/TourDescription';

export interface ITourProps {
  children: React.ReactNode,
  tour: ITour
}

const Tour: React.FC<ITourProps> = (props) => {
  return (
    <FlexWrapper
      width="100%"
      height="430px"
      direction="column"
      justify="start"
      gap="10px"
      border="1px solid #D3EAFF"
      textAlign="center"
    >
      <TourImage image={props.tour.flight.links.flickr_images[0]}/>
      <TourDescription missionName={props.tour.flight.mission_name}/>
      {props.children}
    </FlexWrapper>
  )
}

export default Tour