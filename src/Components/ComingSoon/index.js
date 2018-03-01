import React from 'react';
import { Main, Img, Header, Title } from '../Panda404/Panda404Styles';
import image from '../../images/ezgif.com-optimize.gif';

const ComingSoon = () => {
  return (
    <Main>
      <Header>
        <Title>Coming Soon...</Title>
      </Header>
      <Img src={image} alt="E S C Mattress Center Sleeping Panda"/>
    </Main>
  )
}

export default ComingSoon
