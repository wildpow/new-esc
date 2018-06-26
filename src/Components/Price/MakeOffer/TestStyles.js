import styled from 'styled-components';

////////////////Cards///////////////////////////
export const CardContainer = styled.div`
  position: relative;
  width: 600px; 
  height: 600px;
`;
//w250 h320
export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: blue;
  color: #333;
  text-align: center;
  font-family: 'zilla slab', sans-serif;
  border-radius: 20px;
  font-size: 18px;
`;

export const Back = styled.div`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: gray;
  color: #333;
  transform: rotateY(180deg);
  text-align: center;
  font-family: 'zilla slab', sans-serif;
  border-radius: 20px;
  font-size: 18px;
`;

///////////////////////////////////////////////////////////////////