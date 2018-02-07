import React from 'react';
import GraphImg from 'graphcms-image';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Main, SaleWrapper, SaleImg, TempurImg, SealyImg, StearnsImg } from './HomeStyles';
import { Carousel } from 'react-responsive-carousel';

const HomeComponent = ({ data: { loading, error, Carousel }}) => {
  if(error) return console.log(error)
  if(!loading) {
    return (
      <Main>
        <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={7000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
        <SaleWrapper>
          <GraphImg image={Carousel.sale} maxWidth={500} withWebp={true} fit="clip"/>
        </SaleWrapper>
        <Link to='/brands/stearns'>
          <GraphImg image={Carousel.pic1} maxWidth={500} withWebp={true} fit="clip"/>
        </Link>
        <Link to='/brands/tempurpedic'>
          <GraphImg image={Carousel.pic2} maxWidth={500} withWebp={true} fit="clip"/>
        </Link>
        <Link to='/brands/sealy'>
          <GraphImg image={Carousel.pic3} maxWidth={500} withWebp={true} fit="clip"/>
        </Link>
        </Carousel>
      </Main>
    )
  }
  return <div>{console.log(loading)}</div>
}

export const query = gql`
  query allAssets {
    Carousel(id:"cjdc1no0pobkl0159tuo2lj52"){
      sale{
        uri
        width
        height
        handle
      }
      pic1 {
        uri
        width
        height
        handle
      }
      pic2 {
        uri
        width
        height
        handle
      }
      pic3 {
        uri
        width
        height
        handle
      }
    }
  }
`;
export default graphql(query)(HomeComponent);