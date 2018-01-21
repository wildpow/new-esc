import React from 'react';
import styled from 'styled-components';
import AboutImg from '../../images/funCo.png'
import '../../app.css';

const Main = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  border: 2px solid black;
  text-align: center;
  flex-direction: column;
`
const Img = styled.img`
max-width: 20rem;
align-self: center;
`
const AboutText = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: white;
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px;
  background-color: ${props => props.red ? '#eb1c24' : '#1565c0'}
`
const AboutComponent = () => {
  return (
    <Main className="animated fadeIn">
      <div>
      
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
      </div>
     
    </Main>
  )
}

export default AboutComponent;