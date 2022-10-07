import React, { useRef } from 'react';
import StyledHome from "./Home.styled";
import HomeBackground from './components/HomeBackground';
import HomeCarousel from './components/HomeCarousel ';

const Home = () => {
  const downRef = useRef<HTMLDivElement>(null);

  return (
    <StyledHome>
      <HomeBackground downRef={downRef}/>
      <HomeCarousel />
      <div ref={downRef}></div>
    </StyledHome>
  )
}

export default Home