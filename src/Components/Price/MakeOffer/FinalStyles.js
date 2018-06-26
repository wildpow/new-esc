import styled from 'styled-components';
import { MainFont2, Red, Blue, BoxShadow,
        FadeIn, RedBorderBottom, Animation,
        MainFont1, TextShadow} from '../../../Styles';

// MAKE OFFER BUTTON STYLES
export const MakeOfferWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${Blue};
  border-radius: 4px;
  color: white;
  font-family: ${MainFont2};
  position: relative;
  display: block;
  border: 1px solid #ccc;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: flat;
  letter-spacing: .18rem;
  font-size: .8rem;
  transition: all ease 0.3s;
  width: 120px;
  margin: 0px 5px 1px 0px;
  padding: 5px;
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
  @media(min-width: 1300px) { font-size: 1.7rem; margin: 5px 35px 5px 5px; width: 300px; }
`;
///////////////////////////////////////////////////

////////// MODAL STYLES//////////////////////
export const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${BoxShadow};
  background-color: white;
  animation-name: ${FadeIn};
  ${Animation};
  margin: 10px;
  @media(orientation: landscape) {
    max-height: 99vh;
    max-width: 99vw;
  }
  @media(min-width: 736px) and (orientation: landscape) {
    max-width: 80vw;
  }
  @media(min-width: 823px) and (orientation: landscape) {
    max-width: 80vw;
  }
  @media(min-width: 768px) and (orientation: portrait) {
    max-width: 50vw;
  }
  @media(min-width: 1024px) {
    max-width: 50vw;
  }
  @media(min-width: 1300px) {
    max-width: 40vw;
  }

  & p {
    padding-bottom: 7px;
    margin-bottom: 0px;
    padding-left: 7px;
    padding-right: 7px;
    font-family: ${MainFont2};
    margin-top: 8px;
    font-size: .9rem;
    line-height: 1.2rem;
    border-bottom: ${RedBorderBottom};
    @media(min-width: 568px) and (orientation: portrait) {
      padding-bottom: 4px;
      padding-top: 4px;
    }
    @media(min-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.6rem;
      padding: 10px 15px 10px 15px;
      margin-top: 0px;
    }
    @media(min-width: 1024px) {
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 15px 10px 15px;
      margin-top: 0px;
    }
    @media(min-width: 1300px) {
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 15px 10px 15px;
      margin-top: 0px;
    }
    @media(orientation: landscape) {
    margin-top: 2px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${Blue};
  border-radius: 4px;
  color: white;
  font-family: ${MainFont2};
  position: relative;
  display: block;
  border: 1px solid #ccc;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: flat;
  letter-spacing: .18rem;
  font-size: 1.4rem;
  align-self: center;
  transition: all ease 0.3s;
  width: 200px;
  margin: 0px 5px 5px 0px;
  padding: 5px;
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
  @media(min-width: 360px) { width: 180px; }
  @media(orientation: landscape) and (min-width: 568px) {
    margin-top: 4px;
    padding: 4px 4px 10px 4px;
    width: 250px;
  }
  @media(orientation: landscape) and (min-width: 569px) { width: 250px; padding: 7px;}
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
    /* align-self: flex-end; */
    /* margin-right: 5px; */
  }
  @media(min-width: 1024px) { align-self: center; margin: 5px 35px 5px 5px;}
  @media(min-width: 1300px) { font-size: 1.7rem; margin: 5px 35px 5px 5px; width: 300px; margin-left: 85px; }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: ${Blue};
  justify-content: space-between;
  position: relative;
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

export const Headline = styled.h3`
  font-family: ${MainFont1};
  color: white;
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

`;