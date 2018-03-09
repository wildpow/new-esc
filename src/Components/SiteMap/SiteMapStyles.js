import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const SitemapFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MattLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  animation-duration: .5s;
  animation-name: ${SitemapFadeIn};
  animation-fill-mode: both;
`;

export const Main = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  margin-bottom: 20px;
    ul {
      padding-right: 20px;
      padding-left: 20px;
      list-style: none;
      line-height: 1.9rem;
    }
    li {
      font-family: 'Open Sans', sans-serif;
    }
    h3 {
      font-family: 'Roboto', sans-serif;
      background-color: #1565c0;
      margin: 0;
      padding-top: 15px;
      padding-bottom: 15px;
      letter-spacing: .20rem;
      font-size: 1.2rem;
      text-align: center;
    }
`;
export const BrandLinks = styled(Link)`
  color: white;
  &:hover {
    color: #eb1c24;
  }
`;
export const SiteLinks = styled(Link)`
    color: #1565c0;
  &:hover {
    color: #eb1c24;
  }
`;

export const MainLinks = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  animation-duration: .5s;
  animation-name: ${SitemapFadeIn};
  animation-fill-mode: both;
`;

export const Lilist = styled.li`
  font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    letter-spacing: .1rem;
    padding-left: 10px;
    padding-right: 10px;
    @media(min-width:412px) { padding-left: 15px; padding-right: 15px;}
    @media(min-width: 768px) {
      font-size: 1.3rem;
      padding-left: 0px;
      padding-right: 0px;
    }
`;

export const UnList = styled.ul`
  list-style: none;
  line-height: 1.8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0;
`;

export const TheNew2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    background-color: #1565c0;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
    margin: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    letter-spacing: .25rem;
    font-size: 1.2rem;
    @media(min-width: 768px) {
      font-size: 2rem;
    }
`;