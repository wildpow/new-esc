import React from 'react'
import image from '../../images/ezgif.com-optimize.gif';
import styled from 'styled-components';
import '../../app.css';
const Main = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  border: 2px solid black;
  transition: all .2s ease-in;
  text-align: center;
  justify-content: center;
`
const Img = styled.img`
  margin: auto;
  max-width: 20rem;
  transition: all .2s ease-in;
@media(min-width: 800px) {
  max-width: 40rem;
}

`
const Header = styled.header`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 0px 30px 0px 30px;
  background-color: #1565c0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`

const Title = styled.h2`
 letter-spacing: .2rem;
`
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



// const Main = styled.div`
// font-family: 'Open Sans', sans-serif;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
//   border-top-left-radius: .11rem;
//   border-top-right-radius: .11rem;
//   border: 2px solid black;
//   transition: all .2s ease-in;
//   text-align: center;
//   margin-left: 9px;
//     margin-right: 9px;
//     @media(min-width: 412px) {
//     margin-left: 30px;
//     margin-right: 30px;
//   }
//   @media(min-width: 600px) {
//     margin-left: 70px;
//     margin-right: 70px;
//   }
//   @media(min-width: 900px) {
//     margin-left: 90px;
//     margin-right: 90px;
//   }
//   @media(min-width: 1100px) {
//     margin-left: 150px;
//     margin-right: 150px;
//   }
//   @media(min-width: 1200px) {
//     margin-left: 220px;
//     margin-right: 220px;
//   }
//   @media(min-width: 1350px) {
//     margin-left: 250px;
//     margin-right: 250px;
//   }
// `
// const AccWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   justify-self: center;
// `;
// const Soon = styled.p`
// padding: 0;
// padding: 0;
// font-size: 1.4rem;
// `
// const TitleText = styled.h2`
// margin-top: 0;
// padding: 10px;
// letter-spacing: .2rem;
// margin-bottom: 0;
// `