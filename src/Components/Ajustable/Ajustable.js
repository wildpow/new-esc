import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  border: 2px solid black;
  /* width: 100vw;
  height: 100vh; */
  text-align: center;
`

const AjustableComponent = () => {
  return (
    <Main>
      <h1>Ajustable Component</h1>
    </Main>
  )
}

export default AjustableComponent;