import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Animation, FadeIn, Blue, H2,
        FlexCol, BoxShadow, FlexRow, Border,
        MainFont2 } from '../../Styles';

export const MainWrapper = FlexCol.extend`
  /* box-shadow: ${BoxShadow};  */
  animation-name: ${FadeIn};
  ${Animation}
  justify-content: space-between;
  /* border-radius: .11rem;
  border: 1px solid #eee; */
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
export const SaleTitle = styled.header`
  /* color: white;
  background-color: ${Blue}; */
  line-height: 1.15rem;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-family: ${MainFont2};
  padding-right: 5px;
  padding-left: 5px;
`;
export const SaleBlurb = styled.p`
margin: 0;
`;

export const StearnTitle = styled.h2`
  padding-left: 5px;
  padding-right: 5px;
  padding: 60px;
  font-size: .8rem;
`;
export const Img = styled.img`
  color: white;
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
  display: flex;
  justify-content: center;
  margin: 2px;
  width: 150px;
  height: 215px;
  margin-top: 15px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
  border-radius: .14rem;
  background-color: white;
  transition: all .15s ease-in-out;
  @media(min-width: 360px) { 
    margin: 5px;
    width: 165px;
    height: 235px; }
  @media(min-width: 414px) { width: 185px;}
  @media(min-width: 768px) { width: 340px; height: 365px; margin-right: 10px; margin-bottom: 20px; }
  @media(min-width: 1024px) { width: 300px; height: 360px; margin-right: 10px; margin-bottom: 20px; }
  &:hover {
    z-index: 999;
    transform: scale3d(1.05,1.05,1);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #1565c0;
  /* margin-top: -10px; */
`;

export const MattImg = styled.img`
  /* align-self: flex-start;
  justify-self: flex-start; */
  color: white;
  /* align-self: flex-end; */
  margin: 0 auto 0px auto;
  width: 110px;
  height: 110px;
  @media(min-width: 360px) { width: 130px; height: 130px; }
  @media(min-width: 768px) { width: 250px; height: 250px; }
  @media(min-width: 1022px) { width: 250px; margin-bottom: -10px}
`;

export const Name = styled.div`
  font-family: ${MainFont2};
  text-decoration: none;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-top: 5px;
  font-size: .9rem;
  margin: 0;
@media(min-width: 768px) { 
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.2rem;
  margin: 0; }
`;

export const PriceRange = styled.div`
  color: black;
  font-family: ${MainFont2};
  font-size: .7rem;
  text-align: center;
  @media(min-width: 360px) {
    font-size: .8rem;
  }
  @media(min-width: 768px) {
    font-size: 1rem;
    /* margin-bottom: 20px; */
  }
`;

export const Span = styled.span`
  /* display: none;
  @media(min-width: 360px) {
    display: block;
  } */
`;
export const Divy = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

// export const Br = styled.br`
//   display: none;
//   @media(min-width: 641px) {
//     display: block;
//   }
// `


export const Wrapper2 = FlexCol.extend`
  border-top: ${Border};
  border-right: ${Border};
  border-left: ${Border};
  
  justify-content: center;
  margin-top: 10px;
  margin-right: 0px;
  margin-left: 0px;
  @media(min-width: 768px) { margin-top: 15px; }
  @media(min-width: 1300px) {
    margin-top: 15px;
    margin-right: 62px;
    margin-left: 62px;
  }
`;

export const Headline = H2.extend`
   @media(min-width: 1300px) { 
    font-size: 1.8rem; 
    letter-spacing: .1rem; 
    padding-right: 1px;
    padding-left: 1px;
    padding-top: 18px;
    padding-bottom: 18px;
    line-height: 1.8rem;
    }
`;

export const P = styled.p`
  font-family: ${MainFont2};
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
  padding: 15px 7px 15px 7px;
  font-size: 1rem;
  line-height: 1.55rem;
  @media(min-width: 640px) {
    padding: 20px 15px 20px 15px;
    line-height: 1.8rem;
    font-size: 1.1rem;
  }
  @media(min-width: 768px) {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
  @media(min-width: 1024px) {
    padding: 15px 65px 15px 65px;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;