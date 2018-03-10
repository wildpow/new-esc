import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Animation, FadeIn, FlexCol, BoxShadow, FlexRow, MainFont2 } from '../../Styles';

export const MainWrapper = FlexCol.extend`
  box-shadow: ${BoxShadow}; 
  animation-name: ${FadeIn};
  ${Animation}
  justify-content: space-between;
  border-radius: .11rem;
  border: 1px solid #eee;
`;

export const MainTitle = styled.header`
  display: flex;
  padding: 0px 10px 0px 10px;
  background-color: white;
`;

export const Title = styled.h2`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 4rem;
`;

export const StearnTitle = styled.h2`
  padding-left: 5px;
  padding-right: 5px;
  padding: 60px;
  font-size: .8rem;
`;
export const Img = styled.img`
  background: white;
  border: 2px solid bkack;
  align-self: center;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  max-height: 10rem;
  max-width: 10rem;
  @media(min-width: 768px) { max-height: 15rem; max-width: 15rem; margin-top: 10px; margin-bottom: 10px; } 
  @media(min-width: 1024px) { max-height: 20rem; max-width: 20rem; }
`;

export const SealyImgPlace = Img.extend`
  max-height: 4rem;
  max-width: 4rem;
  @media(min-width: 768px) { max-height: 6rem; max-width: 6rem; margin-top: 10px; margin-bottom: 10px; } 
  @media(min-width: 1024px) { max-height: 10rem; max-width: 10rem; } 
`;

export const StearnsImgPlaceHolder = Img.extend`
  padding: 10px;
`;

export const Wrapper = FlexRow.extend`
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
  align-self: center;
  align-items: center;
  justify-items: center;
  margin-bottom: 10px;
`;

export const LinkWrapper = styled.div`
  border: 2px solid black;
  margin: 5px;
  width: 150px;
  height: 205px;
  margin-top: 20px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
  border-radius: .14rem;
  background-color: white;
  transition: all .15s ease-in-out;
  @media(min-width: 768px) { width: 340px; height: 350px; margin-right: 10px; margin-bottom: 20px; }
  @media(min-width: 1024px) { width: 300px; height: 350px; margin-right: 10px; margin-bottom: 20px; }
  &:hover {
    z-index: 999;
    transform: scale3d(1.05,1.05,1);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  color: #1565c0;
`;

export const MattImg = styled.img`
  margin: auto;
  width: 120px;
  height: 100px;
  @media(min-width: 768px) { width: 250px; height: 250px; }
  @media(min-width: 1022px) { width: 290px;}
`;

export const Name = styled.p`
  font-family: ${MainFont2};
  text-decoration: none;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  font-size: .9rem;
@media(min-width: 768px) { padding-left: 10px; padding-right: 10px; font-size: 1.2rem; }
`;
