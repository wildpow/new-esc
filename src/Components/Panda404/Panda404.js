import React from 'react';
import image from '../../images/ezgif.com-optimize.gif';
import { Main, Img, Title } from './Panda404Styles';
import { Link } from 'react-router-dom';

const Panda404 = () => {
  return (
    <Main>
      <header>
        <Title>Our panda couldn't find the product you're looking for...</Title>
      </header>
      <Link to='/'><Img src={image} alt="E S C Mattress Center Sleeping Panda "/></Link>
    </Main>
  )
};

export default Panda404;