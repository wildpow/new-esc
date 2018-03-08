import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainFooter = styled.footer`
  margin-top: 15px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 5px;
  background-color: white;
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  @media(min-width: 1200px) {
    max-width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    margin-left: 220px;
    margin-right: 220px;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 7px 7px 4px 7px;
`;

export const FBimage = styled.img`
  max-width: 3.5rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const Timage = styled.img`
max-width: 4.1rem;
padding-left: 10px;
transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const YelpHolder = styled.div`
  background-color: #d32323;
  margin-left: 10px;
  border-top-left-radius: .2rem;
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
  border-bottom-left-radius: .2rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const YelpImg = styled.img`
  width: 3.54rem;
  max-height: 3.15rem;
`;

export const InstaImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const MapsImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;
export const GraphLink = styled.a`
 display: block;
  padding-top: 5px;
  @media(min-width:500px) { padding-top: 0px;}
`


export const GraphImg = styled.img`
 transition: all .25s ease-in;
 display: inline-block;
 
 margin-left: 10px;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`

export const Contact = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
justify-content: space-evenly;
margin-top: 10px;
margin-bottom: 10px;
`


export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 768px) { font-size: 1.3rem; }
  @media (min-width: 1024px) { font-size: 1.5rem;}
`;

export const HoursPara = styled.p`
  margin-top: 4px;
  margin: 0;
  font-variant: small-caps;
`

export const HoursSpan = styled.span`
  text-decoration: underline;
  padding-bottom: 5px;
`;

export const MapLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #eb1c24;
    -webkit-text-decoration-color: #eb1c24;
    -moz-text-decoration-color: #eb1c24;
  }
`;

export const Divy = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 20px;
@media(min-width: 768px) { margin-top: 30px; }
`;

export const BottomLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7rem;
  justify-content: space-around;
  /* justify-content: space-evenly; */
  margin-bottom: 15px;
  margin-top: 25px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  @media(min-width:640px) {
    flex-direction: row;
  }
  @media(min-width: 1024px) { font-size: 1.3rem;}
`;

export const BottomLinks = styled(Link)`
  color: #eb1c24;
  &:hover {
    color: #1565c0;
  }
`;