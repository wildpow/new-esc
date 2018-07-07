import styled from 'styled-components';
import { Blue, TextShadow, MainFont1, Red, MainFont2 } from '../../../Styles';
////////////////Cards///////////////////////////

//w250 h320
export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
`;

export const Front = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #FFFFFF;
  /* border-radius: 10px; */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  & p {
    padding: 7px 10px 7px 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 1.32rem;
    font-size: .9rem;
    text-align: justify;
    text-justify: inter-character;
    font-family: ${MainFont2};
    border-bottom: 4px solid ${Red};
    @media(orientation: landscape) { 
      padding: 2px 10px 2px 10px;
      border-bottom: 2px solid ${Red};
    }
    @media(orientation: landscape) and (min-width:640px){ 
      padding: 7px 10px 7px 10px;
      border-bottom: 4px solid ${Red};
    }
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 5px 18px 12px 18px;
    }
    @media (min-width: 1024px) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 5px 18px 12px 18px;
    }
    

  }
`;

export const Back = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  z-index: 1000;
  height: 100%;
  backface-visibility: hidden;
  background: #FFFFFF;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
	-moz-transform: rotateY(180deg);
	-o-transform: rotateY(180deg);
	-ms-transform: rotateY(180deg);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  
  & p {
    padding: 7px 10px 7px 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 1.32rem;
    font-size: .9rem;
    text-align: justify;
    text-justify: inter-character;
    font-family: ${MainFont2};
    border-bottom: 4px solid ${Red};
    @media(orientation: landscape) { 
      padding: 2px 10px 2px 10px;
      border-bottom: 2px solid ${Red};
    }
    @media(orientation: landscape) and (min-width:640px){ 
      padding: 7px 10px 7px 10px;
      border-bottom: 4px solid ${Red};
    }
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 5px 18px 12px 18px;
    }
    @media (min-width: 1024px) {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 5px 18px 12px 18px;
    }
  }
  & img {
    max-width: 5rem;
  }
`;

///////////////////////////////////////////////////////////////////

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: ${MainFont1};
  background: ${Blue};
  /* border-top-right-radius: 10px;
  border-top-left-radius: 10px; */
  color: white;
  & h3 {
    padding: 15px 15px 15px 15px;
    font-size: 1.2rem;
    letter-spacing: .2rem;
    margin: 0;
    text-shadow: ${TextShadow};
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    font-size: 1.7rem;
    letter-spacing: .3rem;
    padding-left: 25px;
    }
    @media (min-width: 1024px) {
      font-size: 1.7rem;
      letter-spacing: .3rem;
      padding-left: 25px;
    }
  }
  & button {
    position: absolute;
    overflow: hidden;
    border: 0;
    color: white;
    outline: none;
    background-color: ${Blue};
    top: 0.1rem;
    right: 0.3rem;
    padding: 0.3rem;
    font-size: 2.2em;
    height: 1em;
    width: 1.3em;
    text-indent: 10em;
    cursor: pointer;
    transition: all ease 0.3s;
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
      font-size: 2.8rem;
    }
    @media (min-width: 1024px) {
      font-size: 2.8rem;
    }
    &:hover {
      color: ${Red};
    }
    &::after {
      position: absolute;
      line-height: 0.5;
      top: 0.45em;
      left: 0.5em;
      text-indent: 0;
      content: "\00D7"; 
      @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
        top: 0.35em;
        left: 0.45em;
      }
      @media (min-width: 1024px) {
        top: 0.35em;
        left: 0.45em;
      }
    }
    
`;

export const Form = styled.form`
  padding: 10px 15px 5px 15px;
  font-family: ${MainFont2};
  display: flex;
  flex-direction: column;
  @media(orientation: landscape) { 
    padding: 2px 15px 2px 15px;
  }
  @media(orientation: landscape) and (min-width:640px){
    padding: 0px 15px 5px 15px;
  }
  @media (min-width: 730px) and (orientation: landscape) {
    padding: 10px 15px 5px 15px;
    }
    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
  
  & input {
    outline: none;
    padding: 7px;
    background: transparent;
    border: none;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    height: 45px;
    transition: all .2s ease-in-out;
    @media(orientation: landscape) {
      margin-bottom: 0px;
      height: auto;
      padding: 2px 7px 2px 7px;
    }
    @media(orientation: landscape) and (min-width:640px){
      /* height: 45px; */
      padding: 7px;
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
    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }
    
    &:focus {
      border-bottom: 1px solid ${Blue};
    }
    &:invalid {
      color: ${Red};
    }
  }
`;
export const SubmitButton = styled.button`
  background-color: ${Blue};
  border-radius: 4px;
  border: 1px solid #ccc;
  color: white;
  display: block;
  font-family: ${MainFont2};
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: flat;
  
  transition: all ease 0.3s;
  letter-spacing: .18rem;
  font-size: 1rem;
  width: 120px;
  margin: 0px;
  padding: 10px;
  &:active {
    box-shadow: 0 3px 0 #ccc;
    top: 3px;
    outline: none;
  }
  &:hover:enabled{
    background-color: ${Red};
    color: white;
    cursor: pointer !important;
  }
  &:active:enabled{
    background: ${Blue} !important;
    box-shadow: inset 0px 0px 5px #c1c1c1 !important;
    outline: none;
  }
  @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    font-size: 1.6rem;
    width: 140px;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
    width: 140px;
  }
`;



