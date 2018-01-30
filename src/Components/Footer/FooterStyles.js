import styled from 'styled-components';

export const MainFooter = styled.footer`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
  justify-content: center;
  justify-self: center;
  text-align: center;
  flex-wrap: nowrap;
  @media (min-width: 768px) {
    margin-top: 15px;
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  align-self: center;
  background-color: white;
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
  @media(min-width: 1200px) {
    max-width: 75vw;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  padding: 7px 7px 4px 7px;
`;

export const FBimage = styled.img`
  max-width: 3.5rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const Timage = styled.img`
max-width: 4.1rem;
padding-left: 10px;
transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const YelpHolder = styled.div`
  background-color: #d32323;
  margin-left: 10px;
  border-top-left-radius: .2rem;
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
  border-bottom-left-radius: .2rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const YelpImg = styled.img`
  width: 3.54rem;
  max-height: 3.15rem;
`;

export const InstaImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const MapsImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const Graph = styled.div``;

export const Hours = styled.div``;