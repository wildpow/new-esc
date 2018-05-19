import styled from 'styled-components';
import { MainFont2, FlexCol, FlexRow } from '../../Styles';

export const Heading = styled.header`
  padding: 30px;
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  /* display: flex;
  flex-direction: column; */
`;

export const FirstArticle = styled.article`
  display: flex;
`;

export const SecondASrticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled.img`
  align-self: flex-start;
  margin-left: 50px;
  margin-right: 50px;
  
`;

export const Holder1 = styled.div`
  align-self: flex-start;
  flex-basis: 350px;
`;

export const Holder2 = styled.div`
  display: flex;
  justify-content: center;
  
`;

export const SubHeading = styled.h3`
  text-align: center;
`;

export const Paragraph = styled.p`
  font-family: ${MainFont2};
  line-height: 1.6rem;
`;
export const Para2 = Paragraph.extend`
  flex-basis: 350px;
`
export const Div = styled.div`
display: flex;
justify-content: center;
`

export const BottomArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = FlexCol.extend`
  justify-content: center;
`