import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  align-items: center;
`;

export const WholeThing = styled.div`
  position: relative;
  display: inline-block;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  &:hover {background-color: #f1f1f1}
`;

export const Button = styled.button`
  background-color: #1565c0;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  font-size: .8rem;
  @media(min-width: 1024px) { font-size: 1rem; padding: 16px;}
  &:hover {background-color: #eb1c24}
  &:focus { background:#eb1c24;}
`;

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #1565c0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
    &:hover {background-color: #f1f1f1}
`;

export const Price = styled.div`
  background: 2px solid black;
  margin-left: 5px;
  background: grey;
  width: 50px;
  height: 50px;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
  @media(min-width: 1024px) { font-size: 1.4rem; padding: 10px; width: 100px; height: 50px; margin-left: 10px;}
`;
