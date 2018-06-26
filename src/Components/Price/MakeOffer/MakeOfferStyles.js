import styled from 'styled-components';
import { MainFont1, MainFont2, Blue
        ,BoxShadow, Border, FadeIn, Animation} from '../../../Styles';







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
  @media(min-width: 360px) {
    margin-top: ${props => props.TopM ? '6px' : '0px'};
    margin-bottom: 8px;
  }
  @media(min-width: 568px) and (orientation: landscape) {
   justify-content: center;
  }
  @media(min-width: 1300px) {
    justify-content: flex-start;
    margin-left: 50px;
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
  @media(min-width: 768px) { font-size: 1.4rem;}
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
  @media(min-width:1024px) {
    font-size: 1.4rem;
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

export const SubmitButton = styled.button`
  
  
  /* margin-bottom: 5px;
  font-size: 1.4rem; */
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
  @media(min-width: 768px) { font-size: 1.4rem;}

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