import styled from 'styled-components';
import { MainFont2, MainFont1, Border, TextShadow } from '../../Styles';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  border-radius: .11rem;

  margin-top: 10px;
`;

export const Header = styled.header`
  margin-top: 5px;
  align-self: center;
`
export const MainLogo = styled.img`
  max-width: 280px;
  margin: 0 auto;
  @media(min-width: 768px) {
    max-width: 450px;
  }
`;

export const FirstImg = styled.img`
  max-width: 240px;
  align-self: center;
  display: none;
  @media(min-width: 768px) {
    display: block;
    max-width: 340px;
    
  }
`;

export const Headline = styled.p`
  text-indent: 15px;
  line-height: 1.25rem;
  letter-spacing: .1rem;
  padding-left: 15px;
  padding-right: 5px;
  margin-bottom: 5px;
  margin-top: 10px;
  color: #706259;
  word-break: break-word;
  
  font-family: ${MainFont2};
  &::first-letter {
    font-size: 140%;
  }
`;
export const CallTOAction = styled.p`
  margin-top: 0;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  text-shadow: ${TextShadow};
  color: #f6f5f2;
  background-color: #706259;
  margin-bottom: 0;
  line-height: 1.4rem;
  font-family: ${MainFont2};
  /* letter-spacing: .1rem; */
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* font-family: ${MainFont2}; */
  font-size: .9rem;
  @media(min-width: 768px) {
    flex-direction: row;
  }
`



export const Icon = styled.img`
  max-width: 50px;
  align-self: center;
  @media(min-width: 768px) {
    max-width: 220px;
  }
`;

export const FormWrapper = styled.div`
  padding-top: 5px;
  background-color: #f6f5f2;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f6f5f2;
  color: #706259;
`;

export const Label = styled.label`
  padding: 5px;
  color: #706259;
  font-family: ${MainFont1};
  margin-left: 5px;
`;

export const Button = styled.button`
  color: #f6f5f2;
  background-color: #706259;
  padding: 5px;
  text-shadow: ${TextShadow};
  letter-spacing: .1rem;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 3px;
  border: ${Border};
  font-family: ${MainFont1};
`;

export const Input = styled.input`
  margin-left: 5px;

  &:focus {
    outline: none;
    border: 2px solid #706259;
    /* box-shadow: 0 0 10px #f6f5f2; */
  }
  /* max-width: 200px; */
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f5f2;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f5f2;
  @media(min-width: 768px) {
    flex-direction: row;
  }
`

export const Holder = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.Cream ? '#f6f5f2' : 'white'};
  @media(min-width: 768px) {
    flex-basis: 40%;
  }
  /* background-color: #f6f5f2; */
  & h3 {
    margin: 0;
    text-align: center;
    color: #706259;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    font-variant: small-caps;
    font-family: ${MainFont2};
  } 
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  & h3 {
    background-color: #f6f5f2;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #706259;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    font-variant: small-caps;
    font-family: ${MainFont2};
  }
`;

export const BottomImgWrapper = styled.div`
  background-color: #706259;
  display: flex;
  flex-direction: column;
  position: relative;
  
`;

export const BottomImg = styled.img`
  max-width: 290px;
  padding: 10px 0 10px 0;
  margin: 0 auto;
  position: relative;
`;

export const RatingsWrap = styled.div`
  text-align: center;
  text-shadow: ${TextShadow};
  color: #f6f5f2;
  background-color: #706259;
  font-family: ${MainFont2};
`;
export const StarImg = styled.img`
  max-width: 150px;
  align-self: center;
  
`;

export const Ratings = styled.div`
 display: flex;
 flex-direction: column;
 padding-bottom: ${(props) => props.Bottom ? '16px' : '0'}
 & p {
   margin-bottom: 5px;
   letter-spacing: .07rem;
   line-height: 1.4rem;
   padding-left: 5px;
   padding-right: 5px;
 }
`;

export const FooterWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #f6f5f2;
  & p {
    background-color: #f6f5f2;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #706259;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    font-variant: small-caps;
    font-family: ${MainFont2};
  }
`