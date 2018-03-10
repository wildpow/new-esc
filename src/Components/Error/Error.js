import React from 'react'
import { Main, Img } from '../Panda404/Panda404Styles';
import { H2 } from '../../Styles';
import { Link } from 'react-router-dom';
import image from '../../images/ezgif.com-optimize.gif';
const Error = () => {
  return (
    <Main>
      <H2>Our panda's are having trouble finding the page you requested</H2>
      <Link to='/' title="Home"><Img src={image} alt="E S C Mattress Center Sleeping Panda "/></Link>
    </Main>
  )
}

export default Error