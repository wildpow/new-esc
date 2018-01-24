import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Wrapper, MainTitle, Main, MainInfo, PriceWrapper, MattOnly, MattSet, PriceTitle } from './SingleMattStyles';
import Markdown from 'react-markdown'
import './stuff.css';
import '../../app.css';

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
          <img src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
            <div id="row">
              <img src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
              <img src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${mattress.detail1.handle}`} alt="this"/>
              <img src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${mattress.detail2.handle}`} alt="this"/>
            </div>
        </div>
    <MainInfo>
      <Markdown className="marker" source={mattress.features} escapeHtml={false} />
      <PriceWrapper>
        <MattOnly>
          <PriceTitle>Mattress Only Price</PriceTitle>
          <ul>
            <li>Twin: {mattress.mattOnly[0]}</li>
            <li>TwinXL: {mattress.mattOnly[1]}</li>
            <li>Full: {mattress.mattOnly[2]}</li>
            <li>Queen: {mattress.mattOnly[3]}</li>
            <li>King/Cal. King: {mattress.mattOnly[4]}</li>
          </ul>
        </MattOnly>
        <MattSet>
          <PriceTitle>Mattress Set Price</PriceTitle>
            <ul>
              <li>Twin: {mattress.setPrice[0]}</li>
              <li>TwinXL: {mattress.setPrice[1]}</li>
              <li>Full: {mattress.setPrice[2]}</li>
              <li>Queen: {mattress.setPrice[3]}</li>
              <li>King/Cal. King: {mattress.setPrice[4]}</li>
            </ul>
        </MattSet>
      </PriceWrapper>
    </MainInfo>

  </Main>
  <div id='row'>
      <h2>OVERVIEW & SPECS</h2>
      {mattress.discription}
      <p>Profile: {mattress.profile}</p>
      <Markdown className="marker" source={mattress.contruction} escapeHtml={false} />
      <p>{mattress.warranty}</p>
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
