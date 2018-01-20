import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  border: 2px solid black;
  text-align: center;
`

const AboutComponent = () => {
  return (
    <Main>
      <h1>About Component</h1>
    </Main>
  )
}

export default AboutComponent;