import React from 'react';
import Aside from './components/aside/Aside';
import Logo from './components/logo/Logo';
import Navigation from './components/navigation/Navigation';
import StyledHeader from './Header.styled';

const Header: React.FC = () => {
  return (
    <StyledHeader>
        <Logo />
        <Navigation />
        <Aside />
    </StyledHeader>
  )
}

export default Header