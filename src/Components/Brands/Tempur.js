import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {  MainWrapper,
          Wrapper,
          LinkWrapper,
          StyledLink,
          MattImg,
          Name  } from './MattListStyles';

// import TempurImg from '../../images/TempurLogo2.png';
import '../../app.css';

const Tempur = ({ data: { loading, error, Brands} }) => {
  if (error) return <h1>Shit Cra Cra {console.log(error)}</h1>
  if(!loading) {
    return (
      <MainWrapper className="animated fadeIn">
        {/* <WrapperRight>
          <Img src={TempurImg} alt="Logo"/>
        </WrapperRight> */}
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return ( 
              <LinkWrapper  key={mattress.id}>
                <StyledLink to={`/brands/tempurpedic/${mattress.id}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>)
          })}
          </Wrapper>
      </MainWrapper>
    )
  }
  return <h1>Loading</h1>
}

export const tempurMattresses = gql`
  query tempurMattresses {
    Brands(brand:"Tempur-Pedic") {
      mattresses {
        id
        subName
        subBrand
        coverImg {
          handle
        }
      }
    }
  }
` 


export default graphql(tempurMattresses)(Tempur);