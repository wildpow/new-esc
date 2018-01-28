import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Wrapper, MainImg, MainTitle, Main,
        MainInfo, PriceWrapper, MattOnly,
        MattSet, PriceTitle, Img1, Img2, Img3,
        PriceList, Overview } from './SingleMattStyles';
import Markdown from 'react-markdown'
import './stuff.css';
import '../../app.css';
import styled from 'styled-components';

const Warranty = styled.p`
font-size: .8rem;
`

const Description = styled.p`
font-size: .6rem;
padding-right: 20px;
padding-left: 20px;
font-family: 'Open Sans', sans-serif;
@media(min-width: 768px) {
  font-size: 1.1rem;
  padding-right: 40px;
  padding-left: 40px;
  line-height: 1.3rem;
}
@media(min-width: 1022px) {
  font-size: 1.2rem;
  padding-right: 60px;
  padding-left: 60px;
  line-height: 1.4rem;
}
@media(min-width: 1300px) {
  font-size: 1.3rem;
  padding-right: 80px;
  padding-left: 80px;
  line-height: 1.5rem;
}
`
//Wrapper: column
const SingleMattress = ({ data: { loading, error, mattress } }) => {
  if (error) return <h1>Error fetching the Mattress!</h1>
  if (!loading) {
    return (
<Wrapper className="animated fadeIn"> 
  <MainTitle>
    <h1>{mattress.name}</h1>
  </MainTitle>
  <Main>
        <div id="column">
          <MainImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
            <div id="row">
              <Img1 src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
              <Img2 src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${mattress.detail1.handle}`} alt="this"/>
              <Img3 src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${mattress.detail2.handle}`} alt="this"/>
            </div>
        </div>
    <MainInfo>
      <Markdown className="marker" source={mattress.features} escapeHtml={false} />
      <PriceWrapper>
        <MattOnly>
          <PriceTitle>Mattress Only Price</PriceTitle>
          <PriceList>
            <li>Twin: {mattress.mattOnly[0]}</li>
            <li>TwinXL: {mattress.mattOnly[1]}</li>
            <li>Full: {mattress.mattOnly[2]}</li>
            <li>Queen: {mattress.mattOnly[3]}</li>
            <li>King/Cal. King: {mattress.mattOnly[4]}</li>
          </PriceList>
        </MattOnly>
        <MattSet>
          <PriceTitle>Mattress Set Price</PriceTitle>
            <PriceList>
              <li>Twin: {mattress.setPrice[0]}</li>
              <li>TwinXL: {mattress.setPrice[1]}</li>
              <li>Full: {mattress.setPrice[2]}</li>
              <li>Queen: {mattress.setPrice[3]}</li>
              <li>King/Cal. King: {mattress.setPrice[4]}</li>
            </PriceList>
        </MattSet>
      </PriceWrapper>
    </MainInfo>

  </Main>
  <div id='row'>
    <Overview>
      OVERVIEW & SPECS
    </Overview><Description>
      {mattress.discription}</Description>
      <p>Profile: {mattress.profile}"</p>
      <Markdown className="marker" source={mattress.contruction} escapeHtml={false} />
      <Warranty>{mattress.warranty}</Warranty>
  </div>
</Wrapper>
    )
  }
  return <h2>Loading Mattresses!!!</h2>
}

export const singleMatt = gql`
  query singleMatt($id: ID!) {
    mattress: Mattress(id: $id) {
      id
      subName
      subBrand
      name
      discription
      features
      profile
      contruction
      mattOnly
      setPrice
      warranty
      coverImg {
        handle
      }
      detail1 {
        handle
      }
      detail2 {
        handle
      }
    }
  }
`
export default graphql(singleMatt, {
  options: ({ match }) => ({
    variables: {
      id: match.params.id
    }
  })
})(SingleMattress)
