import React from 'react';
import { Main, Img } from '../Panda404/Panda404Styles';
import image from '../../images/ezgif.com-optimize.gif';
import { H2 } from '../../Styles';

const ComingSoon = () => {
  return (
    <Main>
      <header>
        <H2>Coming Soon...</H2>
      </header>
      <Img src={image} alt="E S C Mattress Center Sleeping Panda"/>
    </Main>
  )
}

export default ComingSoon
