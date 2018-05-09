import React from 'react'
import { Main, Img } from '../Panda404/Panda404Styles';
import { H2 } from '../../Styles';
import { Link } from 'react-router-dom';
import BreadCrumbs, { BreadWrapper } from '../BreadCrumbs/BreadCrumbs';
import image from '../../images/ezgif.com-optimize.gif';
const Error = (props) => {
  return (
    <div>
      <BreadWrapper>
        <BreadCrumbs  next={props.next} 
                      next2={props.next2} 
                      here={props.here} 
                      error={props.error} 
                      only2Links={props.only2Links} 
                      only3Links={props.only3Links}
        />
      </BreadWrapper>
      <Main>
        <H2>Our panda's are having trouble finding the page you requested</H2>
        <Link to='/' title="Home">
          <Img src={image} alt="E S C Mattress Center Sleeping Panda "/>
        </Link>
      </Main>
      <BreadWrapper>
        <BreadCrumbs  next={props.next} 
                      next2={props.next2} 
                      here={props.here} 
                      error={props.error} 
                      only2Links={props.only2Links} 
                      only3Links={props.only3Links}
        />
      </BreadWrapper>
    </div>
  )
}

export default Error