import React, { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom';
import FlexWrapper from 'ui/flex-wrapper/FlexWrapper';
import BlueButton from 'ui/blue-button/BlueButton';
import GraySquare from 'ui/grey-square/GraySquare';

const Aside: React.FC = () => {
  const location = useLocation();

  const getImageLink = useCallback(() => {
    return location.pathname.split("/").includes("favorite") ?
      process.env.PUBLIC_URL + "/images/whiteHeart.svg" :
      process.env.PUBLIC_URL + "/images/blackHeart.svg";
  }, [location])

  return (
    <FlexWrapper gap="10px">
      <Link to="/favorite">
        <GraySquare
          imageLink={getImageLink()}
          isPink={location.pathname.split("/").includes("favorite")}
        />
      </Link>
      <BlueButton
        text="SIGN IN"
        width="163px"
      />
    </FlexWrapper>
  )
}

export default Aside