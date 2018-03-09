import styled, { keyframes } from 'styled-components';
import Markdown from 'react-markdown';

export const PosttFadIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6); 
  animation-duration: .5s;
  animation-name: ${PosttFadIn};
  animation-fill-mode: both;
  padding-bottom: 20px;
  @media(min-width:1200px) { margin-left: 220px; margin-right: 220px; }
`;

export const Header = styled.header`
  font-family: 'Roboto', sans-serif;
  background-color: #1565c0;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const HeaderText = styled.h2`
  font-size: .9rem;
  padding-right: 5px;
  padding-left: 5px;
  @media(min-width: 768px) { font-size: 1.4rem; line-height: 2rem;letter-spacing: .2rem; }
  @media(min-width: 1024px) { font-size: 1.5rem; }
  @media(min-width: 1300px) { font-size: 1.8rem; letter-spacing: .13rem; }
`;

export const BottomImg = styled.img`
  margin: auto;
  margin-top: 20px;
  max-width: 100%;
  @media(min-width: 1022px) { width: 100%; height: 100%; }
`;

export const Marker = styled(Markdown)`
  & ol {
    list-style-position: inside;
    background-color: #1565c0;
    color: white;
    padding-top: 10px;
    padding-bottom: 20px;
    }
  & li {
    margin: auto;
    font-family: 'Open Sans', sans-serif;
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    /* text-indent: 30px; */
    padding-top: 10px;
    padding-bottom: 0px;
  }
  & p {
    font-family: 'Open Sans', sans-serif;
    padding-left: 12px;
    padding-right: 12px;
    line-height: 1.4rem;
    font-size: 1rem;
    text-indent: 30px;
    padding-top: 10px;
    padding-bottom: 0px;
  }
  @media(min-width:768px) {
    & p {
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
    & li {
      text-align: center;
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
  @media(min-width:1024px) {
    & ol {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    & li {
      margin-bottom: 0;

    padding-right: 60px;
    padding-left: 60px;
    font-size: 1.6rem;
    line-height: 1.85rem;
    padding-bottom: 10px;
    }
    & p {
      margin-bottom: 0;
      padding-right: 60px;
      padding-left: 60px;
      font-size: 1.6rem;
      line-height: 1.7rem;
      padding-bottom: 30px;
    }
  }
`;