import styled from 'styled-components';
import { Blue, TextShadow, MainFont1, Red, MainFont2 } from '../../../Styles';
////////////////Cards///////////////////////////
export const CardContainer = styled.div`
  position: relative;
  width: 600px; 
  height: 600px;
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
    padding: 30px;
    font-family: ${MainFont2};
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
    margin: 0;
    padding: 10px;
    font-size: 1.3rem;
    letter-spacing: .2rem;
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
      top: 0.2em;
      left: 0.6em;
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
  padding: 30px;
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
  }
  & textarea{
    resize:none;
    overflow: hidden;
  }
`;