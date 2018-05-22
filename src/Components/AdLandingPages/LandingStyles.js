import styled from 'styled-components';
import { MainFont2, FlexCol, Border, TextShadow } from '../../Styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: ${Border};
  margin-top: 10px;
`;

export const Header = styled.header`
  margin-top: 5px;
  align-self: center;
`
export const MainLogo = styled.img`
  max-width: 270px;
  margin: 0 auto;
`;

export const FirstImg = styled.img`
  max-width: 240px;
  align-self: center;
  display: none;
`;

export const Headline = styled.p`
  text-indent: 20px;
  line-height: 1.3rem;
  letter-spacing: .1rem;
  padding-left: 10px;
  padding-right: 5px;
  margin-bottom: 0;
  &::first-letter {
    font-size: 140%;
  }
`;
export const CallTOAction = styled.p`
  text-shadow: ${TextShadow};
  color: white;
  margin-top: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  background-color: #706259;
  margin-bottom: 0;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${MainFont2};
  font-size: .9rem;
`

export const BottomImg = styled.img`
  max-width: 120px;
`;

export const Icon = styled.img`
  max-width: 50px;
`;

export const StarImg = styled.img`
  max-width: 50px;
`;

export const FormWrapper = styled.div`
  background-color: #f6f5f2;
`;