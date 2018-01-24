import React from 'react';
import styled from 'styled-components';
import AboutImg from '../../images/funCo.png'
import '../../app.css';

const Main = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
 
  text-align: center;
  flex-direction: column;
  
`
const Img = styled.img`
padding-top: 15px;
padding-bottom: 15px;
max-width: 21rem;
align-self: center;
@media(min-width: 768px) {
  max-width: 35rem;
  padding-top: 25px;
}
`
const AboutText = styled.p`
  @media(min-width: 768px) {
    padding: 25px;
    line-height: 2.5rem;
    word-spacing: .24rem;
}
  font-family: 'Open Sans', sans-serif;
  color: white;
  margin-top: 0;
  
  margin-bottom: 0;
  padding: 15px;
  background-color: ${props => props.red ? '#eb1c24' : '#1565c0'}
`

const Wrapper = styled.div`
align-self: center;
border: 2px solid black;
@media(min-width:768px) {
    font-size: 1.8rem;
  }
@media(min-width: 1200px) {
  max-width: 75vw;
}

`
const AboutComponent = () => {
  return (
    <Main className="animated fadeIn">
      <Wrapper>
      
      <AboutText>With over 20 years of mattress industry
        knowledge between us we set out to create a better 
        mattress shopping experience.
      </AboutText>
      <Img src={AboutImg} alt="funCo team"/>
      <AboutText red>
        Our non-commissioned 
        staff is trained to help you find the mattress of 
        your dreams.  We are a locally owned retailer that
        specializes in helping out guests get the best
        nights sleep to “Sleep like the experts do!”
      </AboutText>
      </Wrapper>
     
    </Main>
  )
}

export default AboutComponent;