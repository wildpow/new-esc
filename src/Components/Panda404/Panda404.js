import React from 'react';
import image from '../../images/ezgif.com-optimize.gif';
import { Main, Img } from './Panda404Styles';
import { Link } from 'react-router-dom';
import { H2 } from '../../Styles';

const Panda404 = () => {
  return (
    <Main>
      <header>
        <H2>Our panda couldn't find the product you're looking for...</H2>
      </header>
      <Link to='/'><Img src={image} alt="E S C Mattress Center Sleeping Panda "/></Link>
    </Main>
  )
};

export default Panda404;