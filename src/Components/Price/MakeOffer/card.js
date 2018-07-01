import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 90vw; 
  height: 90vh;
  @media(orientation: landscape) and (max-width: 812px) and (max-height: 450px) {
    width: 92vw; 
    height: 97vh;
  }
  @media(min-width: 360px) and (orientation: portrait){
    height: 80vh;
  }
  @media(min-width: 360px) and (min-height: 666px) and (orientation: portrait){
    height: 74vh;
  }
  @media(min-width: 375px) and (min-height: 812px) and (orientation: portrait){
    height: 61vh;
  }
  @media(min-width: 410px) and (orientation: portrait){
    height: 68vh;
  }
  @media (min-width: 411px) and (min-height:823px) and (orientation: portrait) {
    height: 60vh;
  }
  @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    width: 60vw;
    height: 55vh
  }
  @media(min-width: 1024px) {
    width: 60vw; 
    height: 65vh;
  }
  @media (min-width: 1024px) and (min-height: 1300px){
    height: 40vh;
  }
  @media(min-width: 1300px) {
    width: 50vw;
    height: 50vh;
  }
  @media(min-width: 400px) and (min-height: 920px) {
    height: 53vh;
  }
  @media(min-width: 769px) and (min-height: 920px) {
    height: 60vh;
  }
  @media(min-width: 931px) and (min-height: 920px) {
    width: 50vw;
    height: 50vh;
  }
  @media(min-width: 1024px) and (min-height: 920px) and (orientation: portrait) {
    width: 40vw;
    height: 44vh;
  }
  @media(min-width: 1024px) and (min-height: 920px) and (orientation: landscape){
    width: 500px;
    height: 530px;
  }
 
  /* @media(min-width: 1500px) and (min-height: 920px) {
    width: 35vw;
    height: 60vh;
  } */
  /* @media(min-width: 375px) and (min-height: 920px) and (orientation: portrait){
    height: 53vh;
  }
  @media(min-width: 420px) and (min-height: 920px) and (orientation: portrait){
    height: 51vh;
  }
  @media(min-width: 540px) and (min-height: 920px) and (orientation: portrait){
    width: 60vw;
  }
  @media(min-width: 768px) and (min-height: 920px) and (orientation: portrait){
    height: 60vh;
  }
  @media(min-width: 857px) and (min-height: 920px) and (orientation: portrait){
    height: 57vh;
  } */
 
  
`;
export const TextArea = styled.textarea`
  outline: none;
  padding: 7px;
  background: transparent;
  border: none;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  transition: all .2s ease-in-out;
  resize:none;
  overflow: hidden;
  height: 60px;
  @media(orientation: landscape) {
    height: auto;
    margin-bottom: 5px;
  }
  @media(orientation: landscape) and (min-width:640px){
    margin-bottom: 1px;
    }
  @media (min-width: 730px) and (orientation: landscape) {
    margin-bottom: 10px;
  }
  @media (min-width: 812px) and (orientation: landscape) {
    margin-bottom: 5px;
  }
  @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    font-size: 1.2rem;
  }
  @media(min-width: 1024px) {
    font-size: 1.2rem;
    height: 70px;
    margin-bottom: 10px;
  }

`;