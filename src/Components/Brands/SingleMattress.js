import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Wrapper, MainTitle, Main,
        MainInfo, PriceWrapper, MattOnly,
        MattSet, PriceTitle,
        Overview } from './SingleMattStyles';
import Markdown from 'react-markdown'
import './stuff.css';
import '../../app.css';
import styled from 'styled-components';
import DropDown from '../DropDrown/index'
import ImageViewer from '../ImageViewer/ImageViewer'
const Warranty = styled.p`
font-size: .8rem;
`

const Description = styled.p`
font-size: .6rem;
/* padding-right: 20px;
padding-left: 20px; */
font-family: 'Open Sans', sans-serif;
background: lightgray;
@media(min-width: 768px) {
  font-size: 1.1rem;
  /* padding-right: 40px;
  padding-left: 40px; */
  line-height: 1.3rem;
}
@media(min-width: 1022px) {
  font-size: 1.2rem;
  /* padding-right: 60px;
  padding-left: 60px; */
  line-height: 1.4rem;
}
@media(min-width: 1300px) {
  font-size: 1.3rem;
  /* padding-right: 80px;
  padding-left: 80px; */
  line-height: 1.5rem;
  margin: auto;
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
    <ImageViewer cover={mattress.coverImg.handle} img1={mattress.detail1.handle} img2={mattress.detail2.handle} />
    <MainInfo>
      <Markdown className="marker" source={mattress.features} escapeHtml={false} />
      <PriceWrapper>
        <MattOnly>
          <PriceTitle>Mattress Only Price</PriceTitle>
          
            <DropDown data={mattress.mattOnly}/>
          
        </MattOnly>
        <MattSet>
          <PriceTitle>Mattress Set Price</PriceTitle>
            
              <DropDown data={mattress.setPrice}/>
            
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
