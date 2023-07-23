import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const rainbowColors = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const WatchWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  background: linear-gradient(135deg, 
    #FF0000, /* Red */
    #FF7F00, /* Orange */
    #FFFF00, /* Yellow */
    #00FF00, /* Green */
    #0000FF, /* Blue */
    #4B0082, /* Indigo */
    #9400D3  /* Violet */
  );
  background-size: 1400% 1400%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${rainbowColors} 10s linear infinite;
  text-align: center;
  margin: 20px auto;
  max-width: 300px;
  padding: 5px;
`;

const Heading = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0 10px;
`;

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <WatchWrapper>
      
      {formatTime(time)}
      <Heading>IS PRECIOUS</Heading>
    </WatchWrapper>
  );
};

export default Watch;
