import React from 'react';
import image from '../../images/ezgif.com-optimize.gif';
import { Main, Img } from './Panda404Styles';
import { Link } from 'react-router-dom';
import { H2 } from '../../Styles';
import BreadCrumbs, { BreadWrapper } from '../BreadCrumbs/BreadCrumbs';

const Panda404 = (props) => {
  return (
    <div>
      <BreadWrapper>
        <BreadCrumbs next={props.next} next2={props.next2} here={props.here} error={props.error} only2Links={props.only2Links} only3Links={props.only3Links}/>
      </BreadWrapper> 
      <Main>
        <header>
          <H2>Our panda couldn't find the product you're looking for...</H2>
        </header>
        <Link to='/'><Img src={image} alt="E S C Mattress Center Sleeping Panda "/></Link>
      </Main>
      <BreadWrapper>
        <BreadCrumbs next={props.next} next2={props.next2} here={props.here} error={props.error} only2Links={props.only2Links} only3Links={props.only3Links}/>
      </BreadWrapper>
    </div>
  )
};

export default Panda404;