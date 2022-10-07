import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import FlexWrapper from 'ui/flex-wrapper/FlexWrapper'
import { styledHeaderLink as StyledHeaderLink } from "./Navigation.styled";

const Navigation: React.FC = () => {
    const location = useLocation();

    return (
        <FlexWrapper gap="20px">
            <Link to="/">
                <StyledHeaderLink
                    color="white"
                    weight={600}
                    size="16px"
                    uppercase={true}
                    isCurrent={location.pathname === "/"}
                >
                    Home
                </StyledHeaderLink>
            </Link>
            <StyledHeaderLink
                color="white"
                weight={600}
                size="16px"
                uppercase={true}
                isCurrent={location.pathname === "/tours"}
            >
                Tours
            </StyledHeaderLink>
            <StyledHeaderLink
                color="white"
                weight={600}
                size="16px"
                uppercase={true}
                isCurrent={location.pathname === "/about"}
            >
                About
            </StyledHeaderLink>
            <StyledHeaderLink
                color="white"
                weight={600}
                size="16px"
                uppercase={true}
                isCurrent={location.pathname === "/help"}
            >
                Help
            </StyledHeaderLink>
        </FlexWrapper>
    )
}

export default Navigation