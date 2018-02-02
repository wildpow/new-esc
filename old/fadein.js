import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const MainWrapper = styled.div`
  animation-duration: .5s;
  animation-name: ${FadeIn};
  animation-fill-mode: both;
`