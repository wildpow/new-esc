import styled from 'styled-components';
import { MainFont2, MainFont1, Border, TextShadow, BoxShadow } from '../../Styles';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  border-radius: .11rem;
  background-color: #f6f5f2;

  margin-top: 10px;
`;

export const Header = styled.header`
  margin-top: 7px;
  align-self: center;
  @media(min-width: 768px) {
    margin-top: 10px;
  }
  @media(min-width: 1024px) {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`
export const MainLogo = styled.img`
  max-width: 280px;
  margin: 0 auto;
  @media(min-width: 768px) {
    max-width: 450px;
  }
  @media(min-width: 1024px) {
    max-width: 550px;
  }
`;
export const LGWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const FirstImg = styled.img`
  /* max-width: 240px; */
  align-self: center;
  display: none;
  @media(min-width: 768px) {
    display: block;
    max-width: 375px;
  }
  @media(min-width: 1024px) {
    max-width: 450px;
  }
  @media(min-width: 1200px) {
    max-width: 550px;
  }
  @media(min-width: 1300px) {
    max-width: 650px;
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
  /* @media(min-width: 768px) {
    font-size: 1.1rem;
  } */
  /* justify-self: center;
  margin: 0 auto; */
  
  font-family: ${MainFont2};
  &::first-letter {
    font-size: 140%;
  }
  @media(min-width: 1024px) {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;
export const MainHeadline = Headline.extend`
  @media(min-width: 1024px) {
    line-height: 2rem;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #f6f5f2; */
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
  @media(min-width: 1200px) {
    margin-bottom: 20px;
    max-width: 250px;
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
  text-align: left;
  color: #706259;
  width: 70px;
  font-family: ${MainFont2};
  margin-left: 5px;
  @media(min-width: 360px) {
    /* display: flex; */
    font-size: 1rem;
    
  }
  @media(min-width: 1024px) {
    font-size: 1.6rem;
    width: 120px;
  }
  @media(min-width: 1300px) {
    font-family: ${MainFont1};
  }
`;
export const Button2 = styled.button`

  background: #ededed;
  border: 1px solid #ccc;
  padding: 10px 30px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;

&:active {
  background: #e5e5e5;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}
`
export const Button = styled.button`
  text-decoration: none;
  outline: none;
  cursor: pointer;
  color: #f6f5f2;
  font-variant: small-caps;
  background-color: #706259;
  padding: 5px;
  text-shadow: ${TextShadow};
  letter-spacing: .1rem;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 7px;
  border: 1px solid black;
  font-family: ${MainFont1};
  & :active {
    background: #e5e5e5;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
}
  @media(min-width: 360px) {
    margin-top: 5px;
    font-size: 1.2rem;
    padding: 7px;
    letter-spacing: .2rem;
  }
  @media(min-width: 1024px) {
    font-size: 2rem;
    padding: 15px;
    letter-spacing: .3rem;
  }
`;

export const Input = styled.input`
  width: 70%;
  font-family: ${MainFont2} !important;
  &:focus {
    outline: none;
    border: 2px solid #706259;
  }
  /* ::-webkit-input-placeholder {
    color: rgba(112, 98, 89, .5);
    font-family: ${MainFont2};
    }
  ::-moz-input-placeholder {
    color: rgba(112, 98, 89, .5);
    font-family: ${MainFont2};
  } */
  
  @media(min-width: 360px) {
    font-size: 1rem;
    padding: 3px;
  }
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
    margin-top: 20px;
    flex-direction: row;
  }
  @media(min-width: 1200px) {
    justify-content: space-evenly;
  }
 
`

export const Holder = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.Cream ? '#f6f5f2' : 'white'};
  @media(min-width: 768px) {
    flex-basis: 40%;
    width: ${(props) => props.Last ? '80%' : 'auto'};
    margin: ${props => props.Last ? '0 auto' : '10px 0 5px 0'};
  }
  @media(min-width: 1200px) {
    flex-basis: 30%;
    width: ${(props) => props.Last ? '38%' : 'auto'};
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
    @media(min-width: 1024px) {
      font-size: 1.8rem;
    }
  } 
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  @media(min-width: 1024px) {
    margin-top: 15px;
  }
  & h3 {
    background-color: #f6f5f2;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #706259;
    text-shadow: ${TextShadow};
    font-size: 1.3rem;
    letter-spacing: .1rem;
    font-variant: small-caps;
    font-family: ${MainFont2};
    @media(min-width: 1024px) {
      font-size: 2.5rem;
    }
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
  @media(min-width: 360px) {
    max-width: 100%;
  }
  
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
  @media(min-width: 1024px) {
    max-width: 350px;
  }
`;

export const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.Bottom ? '16px' : '0'};
  & p {
    margin-bottom: 5px;
    letter-spacing: .07rem;
    line-height: 1.4rem;
    padding-left: 5px;
    padding-right: 5px;
    @media(min-width: 1024px) {
      font-size: 1.7rem;
      line-height: 2.4rem;
    }
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
  @media(min-width: 1024px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media(min-width: 1300px) {
    line-height: 2.2rem;
    padding-top: 25px;
    letter-spacing: .27rem;
    padding-bottom: 25px;
`;

export const MapInfo = styled.div`
  color: #706259;
  font-variant: small-caps;
  font-family: ${MainFont1};
  @media(min-width: 1200px) {
    font-size: 1.3rem;
  }
  & a {
    color: #706259;
  }
  & img {
    width: 70px;
  }
`