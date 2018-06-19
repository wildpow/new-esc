import styled from 'styled-components';
import { MainFont1, MainFont2, Blue, Red} from '../../../Styles';

export const MakeOfferButton = styled.button`
  background-color: ${Blue};
  font-family: ${MainFont1};
  color: white;
  padding: 15px;
`;
export const Header = styled.header`
  display: flex;
  background-color: ${Blue};
  justify-content: space-between;
`;

export const Headline = styled.h3`
  font-family: ${MainFont1};
  color: white;
  margin: 0;
  text-align: center;
  padding: 20px;
  font-size: 2rem;
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
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  background-color: white;
  & p {
    font-size: 2rem;
  }  
`;

export const FormWrapper = styled.div`

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.div`
  margin-top: ${props => props.TopM ? '2px' : '0px'};
  display: flex;
  margin-bottom: 4px;
  flex-direction: row;
  @media(min-width: 360px) {
    margin-top: ${props => props.TopM ? '6px' : '0px'};
    margin-bottom: 8px;
  }
`;

export const Label = styled.label`
  padding: 5px;
  text-align: left;
  color: black;
  width: 70px;
  font-family: ${MainFont1};
  margin-left: 5px;
  @media(min-width: 360px) { font-size: 1rem; }
  @media(min-width: 1024px) { font-size: 1.6rem; width: 100px; }
`;

export const Input = styled.input`
  width: 70%;
  font-family: ${MainFont2} !important;
  &:focus {
    outline: none;
    border: 2px solid black;
  }
  ::-webkit-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
    }
  ::-moz-input-placeholder {
    color: rgba(112, 98, 89, .25);
    font-family: ${MainFont2};
  }
  
  @media(min-width: 360px) {
    font-size: 1rem;
    padding: 6px;
  }
  @media(min-width: 1300px) {
    padding: 10px;
  }
`;
export const MakeOfferWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Span = styled.span`
 display: none;
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
  border-radius: 5px;
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
  }
  &:active:enabled{
    background: ${Blue} !important;
    box-shadow: inset 0px 0px 5px #c1c1c1 !important;
    outline: none;
  }

  @media(min-width: 360px) { width: 200px; }
  @media(min-width: 768px) {
    width: 300px;
    letter-spacing: .25rem;
    font-size: 1.4rem;
    margin: 5px auto;
    padding: 10px;
  }
  @media(min-width: 1300px) { font-size: 1.7rem; margin: 5px 35px 5px 5px; }
`;