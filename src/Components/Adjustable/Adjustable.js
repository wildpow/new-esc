import React from 'react';
import styled from 'styled-components';
import '../../app.css'

const Main = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  border: 2px solid black;
  /* width: 100vw;
  height: 100vh; */
  text-align: center;
`

const AdjustableComponent = () => {
  return (
    <Main className="animated fadeIn">
      <h1>Adjustable Component</h1>
    </Main>
  )
}

export default AdjustableComponent;