import styled from 'styled-components';
import { FlexCol, FlexRow } from '../../Styles';

export const ImgWrapper = FlexCol.extend`
  margin: 0;
  @media(min-width: 1024px) {margin-right: 10px;}
`;

export const SmallImgHolder = FlexRow.extend`
  justify-content: center;
  align-self: center;
`;

export const SmImg = styled.img`
  color: white;
  width: 50px;
  height: 50px;
  @media(min-width: 360px) { width: 60px; height: 60px; }
  @media(min-width: 500px) { width: 83px; height: 75px; }
  @media(min-width: 768px) { width: 100px; height: 80px; }
  @media(min-width: 1024px) { width: 165px; height: 150px; }
  border: 2px solid white;
  &:hover { border: 2px solid black; }
`;

export const LargeImg = styled.img`
  color: white;
  width: 160px;
  height: 140px;
  @media(min-width: 360px) { width: 180px; height: 160px; }
  @media(min-width: 500px) { width: 250px; height: 230px; }
  @media(min-width: 768px) { width: 350px; height: 200px; }
  @media(min-width: 1024px) { width: 500px; height: 300px; }
`;
