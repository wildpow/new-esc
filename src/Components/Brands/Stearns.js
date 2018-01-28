import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {  MainWrapper,
          WrapperRight,
          Img,Wrapper,
          LinkWrapper,
          StyledLink,
          MattImg,
          Name  } from './MattListStyles';

import StearnsImg from '../../images/StearnsLogo.png'
import '../../app.css';

const Sealy = ({ data: { loading, error, Brands} }) => {
  if (error) return <h1>Shit Cra Cra {console.log(error)}</h1>
  if(!loading) {
    return (
      <MainWrapper>
        {/* <WrapperRight>
          <Img src={StearnsImg} alt="Logo"/>
        </WrapperRight> */}
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return (
              <LinkWrapper  key={mattress.id} className="animated fadeIn">
                <StyledLink to={`/brands/stearns/${mattress.id}`}>
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


export const stearnsMattresses = gql`
  query stearnsMattresses {
    Brands(brand:"Stearns&Foster") {
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


export default graphql(stearnsMattresses)(Sealy);