import styled from 'styled-components';
import { Blue, TextShadow, MainFont1, Red, MainFont2 } from '../../../Styles';
////////////////Cards///////////////////////////
export const CardContainer = styled.div`
  position: relative;
  width: 90vw; 
  height: 85vh;
  @media(min-width: 1300px) {
    width: 600px; 
    height: 600px;
  }
`;
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
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  & p {
    padding: 5px 10px 5px 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: 1.25rem;
    font-size: .9rem;
    text-align: justify;
    text-justify: inter-character;
    @media(min-width: 1300px) {
      padding: 10px 30px 10px 30px;
      margin-top: 0px;
      line-height: 1.6rem;
    }
    
    font-family: ${MainFont2};
    border-bottom: 4px solid ${Red};
  }
`;

export const Back = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: gray;
  color: #333;
  transform: rotateY(180deg);
  text-align: center;
  font-family: 'zilla slab', sans-serif;
  border-radius: 20px;
  font-size: 18px;
`;

///////////////////////////////////////////////////////////////////

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: ${MainFont1};
  background: ${Blue};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: white;
  & h3 {
    padding: 15px 15px 15px 15px;
    font-size: 1.2rem;
    letter-spacing: .2rem;
    @media(min-width: 1300px) {
      padding: 10px;
      font-size: 1.3rem;
      letter-spacing: .2rem;
    }
    margin: 0;
    text-shadow: ${TextShadow};
    @media(min-width: 568px) and (orientation: landscape) {
      padding: 12px;
      font-size: 1.2rem;
    }
    @media(min-width: 768px) {
      font-size: 1.4rem;
    }
    @media(min-width: 1024px) {
      font-size: 2rem;
      padding: 15px;
      margin-left: 10px;
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
      @media(min-width: 768px) {
        top: 0.3em;
        left: 0.55em;
      }
      @media(min-width: 1024px) {
        top: 0.25em;
        left: 0.5em;
      }
    }
    @media(min-width: 1024px) {
      font-size: 3.2em;
    }
  }
`;

export const Form = styled.form`
  padding: 5px 15px 5px 15px;
  @media(min-width: 1300px) {
    padding: 10px 30px 10px 30px;
  }
  font-family: ${MainFont2};
  display: flex;
  flex-direction: column;
  & input, textarea {
    outline: none;
    padding: 7px;
    background: transparent;
    border: none;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    height: 45px;
    transition: all .2s ease-in-out;
    &:focus {
      border-bottom: 1px solid ${Blue};
    }
    &:invalid {
      color: ${Red};
    }
  }
  & textarea{
    resize:none;
    overflow: hidden;
    margin-bottom: 10px;
    height: 60px;
    @media(min-width: 1300px) {
      margin-bottom: 60px;
      height: 70px;
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
  margin: 0px 5px 1px 0px;
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
  @media(min-width: 360px) { width: 130px; }
  @media(orientation: landscape) and (max-width: 568px) { width: 160px; }
  @media(orientation: landscape) and (min-width: 569px) { width: 180px; padding: 7px;}
  @media(orientation: landscape) and (min-width: 811px) { 
    width: 220px; 
    padding: 10px; 
    font-size: 1.2rem;
  }
  @media(min-width: 768px) and (orientation: portrait){
    width: 260px;
    letter-spacing: .25rem;
    font-size: 1.4rem;
    margin: 5px auto;
    padding: 10px;
    align-self: flex-end;
    margin-right: 5px;
  }
  @media(min-width: 1024px) { align-self: center; margin: 5px 35px 5px 5px;}
  @media(min-width: 1300px) { 
    font-size: 1.7rem;
    margin: 5px 5px 5px 5px;
    align-self: flex-start;
  }
`;