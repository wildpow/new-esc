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

const FinancingComponent = () => {
  return (
    <Main>
      <h1>Financing Component</h1>
    </Main>
  )
}

export default FinancingComponent;