import React from 'react';
import { Main, Img, Header, Title } from '../Panda404/Panda404Styles';
import image from '../../images/ezgif.com-optimize.gif';
import '../../app.css';

const ComingSoon = () => {
  return (
    <Main className="animated fadeIn">
      <Header>
        <Title>Coming Soon...</Title>
      </Header>
      <Img src={image} alt="panda sleeping"/>
    </Main>
  )
}

export default ComingSoon
