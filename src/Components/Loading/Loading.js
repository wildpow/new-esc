import React from 'react';
import styled, { keyframes } from 'styled-components';


const Spinning = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Loader = styled.div`
    border: 56px solid #f3f3f3; /* Light grey */
    border-top: 56px solid #1565c0; /* Blue */
    border-radius: 50%;
    width: 320px;
    height: 320px;
    @media(min-width: 768px) {
      width: 420px;
      height: 420px;
    }
    animation: ${Spinning} 2s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  animation-duration: .25s;
  animation-name: ${LoadingFadeIn};
  animation-fill-mode: both;
`;


const Loading = () => {
  return (
    <Wrapper>
      <Loader/>
    </Wrapper>
  )
}

export default Loading;