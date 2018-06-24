import styled from 'styled-components';
import { MainFont1,
        RedBorderBottom, MainFont2,
        Blue, Red, TextShadow
        ,BoxShadow, Border, FadeIn, Animation} from '../../../Styles';

export const SubmitButton2 = styled.button`
  background-color: ${Blue};
  font-family: ${MainFont1};
  color: white;
  border: 1px solid #ccc;
  font-family: ${MainFont2};
  letter-spacing: .18rem;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: flat;
  transition: all ease 0.3s;
  padding: 5px;
  &:active {
  box-shadow: 0 3px 0 #ccc;
  top: 3px;
  outline: none;
  }
  &:hover:enabled{
    background-color: ${Red};
    color: white;
  }
  &:active:enabled{
    background: ${Blue} !important;
    box-shadow: inset 0px 0px 5px #c1c1c1 !important;
    outline: none;
  }
`;
export const Header = styled.header`
  display: flex;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
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
    /* font-family: ${MainFont1}; */
   
    /* font-size: 1.3rem;
    padding-right: 5px;
    transition: all ease 0.3s;
    background-color: ${Blue};
    border-color: ${Blue}; */
    transition: all ease 0.3s;
    @media(min-width: 1300px) {
      font-size: 3.2em;
    }
    &:hover {
      color: ${Red};
    }
    &:after {
      position: absolute;
      line-height: 0.5;
      top: 0.2em;
      left: 0.6em;
      text-indent: 0;
      content: "\00D7";
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
  @media(min-width: 1300px) {
    font-size: 2rem;
    padding: 15px;
    margin-left: 20px;
  }

`;

export const ModalContainer = styled.div`
  /* background-color: rgba(0,0,0,0.5); */
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: 3s; */
  /* overflow: hidden; */
`;

export const ModalBox = styled.div`
  /* width: 80vw; */
  align-self: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: ${Border}; */
  box-shadow: ${BoxShadow};
  background-color: white;
  animation-name: ${FadeIn};
  ${Animation};
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
    @media(min-width: 1300px) {
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 20px;
      margin-top: 0px;
    }
    @media(orientation: landscape) {
    margin-top: 2px;
  }
  }
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
  @media(min-width: 1300px) {
    max-width: 40vw;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  /* justify-content: flex-start; */
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  @media(orientation: landscape) { margin-top: 0px; }
`;

export const LabelWrapper = styled.div`
  /* align-self: flex-start; */
  margin-left: 15px;
  margin-top: ${props => props.TopM ? '2px' : '0px'};
  display: flex;
  margin-bottom: 4px;
  flex-direction: row;
  @media(min-width: 568px) and (orientation: landscape) {
   justify-content: center;
  }
  @media(min-width: 360px) {
    margin-top: ${props => props.TopM ? '6px' : '0px'};
    margin-bottom: 8px;
  }
`;

export const Label = styled.label`
  padding: 5px 5px 5px 0px;
  text-align: left;
  color: black;
  width: 20%;
  font-family: ${MainFont1};
  @media(min-width: 360px) { font-size: 1rem; }
  @media(min-width: 568px) and (orientation: landscape) {
    font-size: .9rem;
    width: 10%;
  }
  @media(min-width: 1024px) { font-size: 1.6rem; width: 100px; }
  
`;

export const Input = styled.input`
  border: 2px solid #eee;
  width: 70%;
  font-family: ${MainFont2} !important;
  &:focus {
    outline: none;
    border: 2px solid ${Blue};
  }
  ::-webkit-input-placeholder {
    color: rgba(112, 98, 89, 1);
    font-family: ${MainFont2};
    }
  ::-moz-input-placeholder {
    color: rgba(112, 98, 89, 1);
    font-family: ${MainFont2};
  }
  
  @media(min-width: 360px) {
    font-size: 1rem;
    padding: 6px;
  }
  @media(min-width: 1300px) {
    padding: 10px;
    width: 300px;
  }
`;
export const NoteInput = Input.extend`
  height: 200px;
`
export const MakeOfferWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Span = styled.span`
  display: none;
  @media(orientation: landscape) {
    display: initial;
  }
  @media(min-width: 768px) {
    display: initial;
  }
`;
export const Button = styled.button`
  position: relative;
  display: block;
  width: 120px;
  
  margin: 0px 5px 1px 0px;
  padding: 5px;
  background-color: ${Blue};
  border: 1px solid #ccc;
  font-family: ${MainFont2};
  letter-spacing: .18rem;
  color: white;
  border-radius: 4px;
  font-size: .8rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: flat;
  transition: all ease 0.3s;
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
  @media(orientation: landscape) { width: 160px; }
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

export const SubmitButton = Button.extend`
  align-self: center;
  width: 200px;
  margin-bottom: 5px;
  font-size: 1.4rem;
  @media(min-width: 568px) and (orientation: landscape) {
    margin-top: 4px;
    padding: 4px 4px 10px 4px;
    width: 250px;
  }
  @media(min-width: 640px) and (orientation: landscape) {
    padding-top: 10px;
  }
`;

export const Textarea = styled.textarea`
  font-family: ${MainFont2} !important;
  border: ${Border};
  width: 70%;
  height: 75px;
  resize: none;
  /* opacity: .5; */
  &:focus {
    outline: none;
    border: 2px solid ${Blue};
  }
  ::-webkit-textarea-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
    }
  ::-moz-textarea-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
  }
  @media(min-width: 568px) and (orientation: landscape) {
    height: 40px;
  }
  @media(min-width: 640px) and (orientation: landscape) {
    height: 60px;
  }
  /* @media(orientation: landscape) { height: 60px; } */
  @media(min-width: 1300px){
    width: 300px;
    height: 150px;
  }
`;

export const ThankYouHeadline = styled.div`
  font-size: 4rem;
  cursor: pointer;
  width: 40vw;
  text-align: center;
  padding: 40px;
  box-shadow: ${BoxShadow};
  background-color: white;
  animation-name: ${FadeIn};
  ${Animation};
  font-family: ${MainFont2};
`;

export const SleepSpan = styled.span`
  display: none;
  @media(orientation: portrait) {
    display: initial;
  }
`;

export const Spanner = styled.span`
  @media(orientation: portrait) {
    display: none;
  }
`