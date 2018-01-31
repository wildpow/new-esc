import styled from 'styled-components';

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const SmallImgHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

export const SmImg = styled.img`
  width: 50px;
  height: 50px;
  @media(min-width: 768px) { width: 100px; height: 80px; }
  @media(min-width: 1024px) { width: 150px; height: 150px; }
  border: 2px solid white;
  &:hover { border: 2px solid black; }
`;

export const LargeImg = styled.img`
  width: 180px;
  height: 160px;
  @media(min-width: 768px) { width: 350px; height: 200px; }
  @media(min-width: 1024px) { width: 450px; height: 300px; }
`;
