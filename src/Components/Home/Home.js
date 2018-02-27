import React from 'react';
import { Helmet } from "react-helmet";
import GraphImg from 'graphcms-image'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Carousel } from 'react-responsive-carousel'; 

import { Main, SaleWrapper, Linky } from './HomeStyles';

// import Sealy from '../../images/SealyPresDayCarouselRatio.jpg';
// import Tempur from '../../images/TempurpedicPresDayCarouselRatio.jpg';
// import Stearns from '../../images/StearnsPresDayCarouselRatio.jpg';
// import Sale from '../../images/PresidentsDayBannerCorrected.jpg';

const HomeComponent = ({data: {error, loading, Images } }) => {
  if (error) return console.log(error)
  if (!loading) {
  return (
    <Main>
      <Helmet>
        <title>E.S.C. Mattress Center</title>
        <meta name="description" content="
            We offer almost fifty mattresses in a wide range of prices to fit every budget.
            Our mattresses are made in the USA, with most of them coming from local manufacturing
            plants and are brands that most people know and trust. Sealy, Stearns & Foster, and Tempur-Pedic."/>
      </Helmet>
      <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={6000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
        <SaleWrapper>
          <GraphImg image={Images[0].sale} alt="this" maxWidth={1000} withWebp={true}/>
        </SaleWrapper>
        <Linky to='/brands/stearns'>
        <GraphImg image={Images[0].pic1} alt="this" maxWidth={1000} withWebp={true}/>
        </Linky>
        <Linky to='/brands/tempurpedic'>
        <GraphImg image={Images[0].pic2} alt="this" maxWidth={1000} withWebp={true}/>
        </Linky>
        <Linky to='/brands/sealy'>
        <GraphImg image={Images[0].pic3} alt="this" maxWidth={1000} withWebp={true}/>
        </Linky>
      </Carousel>
    </Main>
  )
}
return null
}

export const allCarousels = gql`
  query allCarousels {
    Images: allCarousels {
      sale {
      handle
      width
      height
    }
      pic1 {
      handle
      height
      width
    }
    pic3 {
      handle
      height
      width
    }
    pic2 {
      handle
      height
      width
    }
    }
  }
`

export default graphql(allCarousels)(HomeComponent);