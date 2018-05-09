import React from 'react'
import { MainWrapper, Wrapper, LinkWrapper, P, Wrapper2, Headline } from './MattListStyles';
import Loading from '../Loading/Loading';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Error from '../Error/Error';
import Helmet from 'react-helmet';
import MattListHoC from './MattListHOC';



const OnSaleMatts = ({ data: { loading, error, allIsOnSales} }) => {
  if (error) return <div>{console.log(error)}<Error/></div>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>{`ESC: ${allIsOnSales[0].tabTitle}`}</title>
          <meta name="description" content={allIsOnSales[0].description}/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/current-sale"/>
          <meta property="og:image" content={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${allIsOnSales[0].currentSaleImg.handle}`}/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content={`E.S.C Mattress Center | ${allIsOnSales[0].saleName}`}/>
          <meta property="og:title" content="E.S.C. Mattress Center"/>
          <meta property="og:description" content={allIsOnSales[0].description}/>
        </Helmet>
        <Wrapper2>
          <Headline>{allIsOnSales[0].saleName}</Headline>
          <P>{allIsOnSales[0].description}</P>
          <Headline red>“Sleep Like the Experts Do!”</Headline>
        </Wrapper2>
        <Wrapper>
          {allIsOnSales[0].mattresses.map((mattress) => {
            let title = '';
            if (mattress.brandName === "Tempur-PEDIC") {
              title = 'tempurpedic';
            } else if (mattress.brandName === "Sealy") {
              title = 'sealy';
            } else {
              title = 'stearns'
            }
            return (
              <LinkWrapper key={mattress.id}>
                <MattListHoC uri={mattress.uri}
                              brandName={mattress.brandName}
                              subBrand={mattress.subBrand}
                              subName={mattress.subName}
                              img={mattress.coverImg.handle}
                              title={title} 
                              priceRange={mattress.priceRange} />
              </LinkWrapper>
            )
          })}
        </Wrapper>
       
        
      </MainWrapper>
    )
  }
  return <Loading/>
}

export const OnSaleMattresses = gql`
  query allIsOnSales {
    allIsOnSales {
      mattresses(filter: {isPublished: true} orderBy: orderByPrice_ASC  ) {
      brandName
        orderByPrice
      uri
      id
      subBrand
      subName
      priceRange
      coverImg {
        handle
      }
    }
    description
    tabTitle
    saleName
    currentSaleImg {
      handle
  }
  }
  }

`;

export default graphql(OnSaleMattresses)(OnSaleMatts);