import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Wrapper, MainTitle, Main,
        MainInfo, PriceWrapper, MattOnly,
        MattSet, PriceTitle, Article,
        Overview, Warranty } from './SingleMattStyles';
import Markdown from 'react-markdown'

import '../../app.css';
import styled from 'styled-components';
import DropDown from '../DropDrown/index'
import ImageViewer from '../ImageViewer/ImageViewer'

const Profile = styled.p`
margin-top: 0;
@media(min-width: 768px) {
  font-size: 1.3rem;
}
@media(min-width: 1024px) { font-size: 2rem; }
`;

export const SingleMattMD = styled(Markdown)`
  font-family: 'Open Sans', sans-serif;
  padding: 0px;
  & p {
    font-size: .9rem;
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: 4px solid #eb1c24;
    padding-bottom: 2px;
  }
  & ul {
    list-style: square;
    margin-top: 10px;
    font-size:  .7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  & li {
    padding-bottom: 2px;
  }
  @media(min-width: 692px) {
    font-family: 'Open Sans', sans-serif;
    padding: 10px 30px 10px 30px;

    & p {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid red;
      padding-bottom: 2px;
    }
    & ul {
      list-style: square;
      margin-top: 10px;
      font-size:  1rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.1rem;
    }
  }
  @media(min-width: 992px) {
    padding: 30px;
    
    & p {
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    & ul {
      margin-top: 10px;
      font-size:  1.8rem;
    }
    & li {
      padding-bottom: 2px;
      font-size: 1.8rem;
    }
  }
`;


const Description = styled.p`
font-size: .9rem;
align-self: center;
font-family: 'Open Sans', sans-serif;
line-height: 1.1rem;
margin-left: 0px;
margin-right: 0px;
padding-left: 14px;
padding-right: 14px;
padding-top: 10px;
padding-bottom: 10px;
border-top-left-radius: .11rem; 
  border-top-right-radius: .11rem;
  border-bottom-right-radius: .11rem;
  border-bottom-left-radius: .11rem;
@media(min-width: 768px) {
  font-size: 1.1rem;
  padding-right: 40px;
  padding-left: 40px;
  line-height: 1.3rem;
}
@media(min-width: 1022px) {
  font-size: 1.8rem;
  padding-right: 60px;
  padding-left: 60px;
  line-height: 1.9rem;
}
@media(min-width: 1300px) {
  font-size: 1.3rem;
  padding-top: 30px;
  padding-right: 80px;
  padding-left: 80px;
  line-height: 1.5rem;
  margin: auto;
}
`
const MainTitleText = styled.h2`

`
const SingleMattress = ({ data: { loading, error, mattress } }) => {
  if (error) return <h1>Error fetching the Mattress!</h1>
  if (!loading) {
    return (
<Wrapper className="animated fadeIn"> 
  <MainTitle>
    <MainTitleText>{mattress.name}</MainTitleText>
  </MainTitle>
  <Main>
    <ImageViewer cover={mattress.coverImg.handle} img1={mattress.detail1.handle} img2={mattress.detail2.handle} />
    <MainInfo>
      <SingleMattMD source={mattress.features} escapeHtml={false} />
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
  <Overview>
      <h2>OVERVIEW & SPECS</h2>
    </Overview>
  <Article>
    <Description>
      {mattress.discription}
    </Description>
      <Profile>Profile: {mattress.profile}'</Profile>
      <SingleMattMD source={mattress.contruction} escapeHtml={false} />
      <Warranty>{mattress.warranty}</Warranty>
  </Article>
</Wrapper>
    )
  }
  return null
}

export const singleMatt = gql`
  query singleMatt($uri: String) {
    mattress: Mattress(uri: $uri) {
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
      uri: match.params.uri
    }
  })
})(SingleMattress)
