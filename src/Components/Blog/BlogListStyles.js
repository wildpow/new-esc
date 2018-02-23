import styled, { keyframes } from 'styled-components';

const FadeInBlog = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Main = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  transition: all .2s ease-in;
  text-align: center;
  justify-content: center;
  animation-duration: .5s;
  animation-name: ${FadeInBlog};
  animation-fill-mode: both;
  @media(min-width: 1200px) {
    margin-right: 220px;
    margin-left: 220px;
  }
`;

export const HeaderText = styled.h2`
  font-size: 1.2rem;
  letter-spacing: .12rem;
  padding-right: 5px;
  padding-left: 5px;
  @media(min-width: 768px) { font-size: 1.4rem; line-height: 2rem; }
  @media(min-width: 1024px) { font-size: 1.5rem; }
  @media(min-width: 1300px) { font-size: 1.8rem; letter-spacing: .1rem; }
`;

export const Header = styled.header`
  font-family: 'Roboto', sans-serif;
  background-color: #1565c0;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const Section = styled.section`
margin-left: 10px;
margin-right: 10px;
  /* margin-top: 20px;
  max-width: 650px;
  display: flex;
  align-items: center;
  flex-direction: column; */
  @media(min-width: 630px) {
    margin-left: 120px;
    margin-right: 120px;
  }
  @media(min-width: 1024px) {
  margin-left: 50px;
  margin-right: 50px;
  /* max-width: 650px; */
  }
  @media(min-width: 1300px) {
    margin-left: 100px;
  margin-right: 100px;
  }
`
export const Homebutton = styled.button`
  width: 100%;
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 16px 24px;
  background: #1565c0;
  border: none;
  border-radius: 0;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
  &:hover {
    z-index: 999;
    transform: scale3d(1.02,1.02,1);
  }
`
export const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
`