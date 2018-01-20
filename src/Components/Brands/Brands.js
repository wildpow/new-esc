import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  border: 2px solid black;
  /* width: 100vw;
  height: 100vh; */
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  @media(min-width: 1022px) {
    flex-wrap: nowrap;  
  }
`

const BrandsComponent = () => {
  return (
    <Main>
      <div>
        <h2>Tempurpedic</h2>
        <p>
          When Tempur-Pedic® introduced their proprietary TEMPUR® material they changed the way the world sleeps.
          TEMPUR® material is infinitely adaptable, responding to your body temperature, adapting to your weight
          and unique shape, giving you personalized support and alignment for undisturbed sleep.
        </p>
        <p>Tempur-Pedic: Life-changing sleep.</p>
      </div>
      <div>
        <h2>Stearns & Foster</h2>
        <p>
        The enduring craftsmanship of Stearns & Foster is their legacy.
        Since 1846 their specially-trained craftsmen have been building mattresses by hand,
        using techniques they developed and spent decades perfecting.  
        They’re so dedicated to what they do, they sign every one.
        </p>
        <p>Stearns & Foster: Crafting the world’s finest bed.</p>
      </div>
      <div>
        <h2>Sealy</h2>
        <p>
          At the heart of every Sealy mattress is the support that’s right for you.
          Only Sealy has Posturepedic Technology™ to provide more support where you
          need it most.  By precisely engineering the mattress into specific zones,
          they’re able to target reinforced support, while providing exceptional full-body support.
        </p>
        <p>Sealy: Proud supporter of you.</p>
      </div>
    </Main>
  )
}

export default BrandsComponent;