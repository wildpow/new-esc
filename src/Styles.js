import styled, { keyframes } from "styled-components";
//Site Wide default values and styles

export const Blue = '#1565c0';
export const Red = '#eb1c24';
export const Border = '1px solid #eee';
export const RedBorderBottom = '4px solid #eb1c24';
export const TextShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)';
export const BoxShadow = '0 10px 6px -6px rgba(119, 119, 119, .6)';
export const MainFont1 = `'Roboto', sans-serif`;
export const MainFont2 = `'Open Sans', sans-serif`;
export const Animation = `animation-duration: .5s; animation-fill-mode: both;`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: Row;
`;

export const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;