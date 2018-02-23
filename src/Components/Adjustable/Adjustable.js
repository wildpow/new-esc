import React from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import { Helmet } from "react-helmet";
import { Main, StyledLink, H3, InfoWrapper, Img, AdjMarkdown} from './AdjustableStyles';
// import AdjHoc from './adjHOC';

const AdjustableComponent = ({ data: {error, loading, Bases},  client }) => {
  const prefetch = (baseUrl) => () => {
    client.query({
      query: gql`
    query singleBase($uri: String) {
      base: AdjBases(uri: $uri) {
        id uri fullName keyfeatures features price salePrice brandLine brandName baseDescription
        height warranty
        coverImg { handle }
        detail1 { handle }
        detail2 { handle } } } `,
        variables: {uri: baseUrl}
    })
  }
  
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    return (
    <Main>
      
      <Helmet>
        <title>ESC: Ajustable Bases</title>
        <meta name="description" content="E.S.C. Mattress Center carry 4 different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."/>
      </Helmet>
      {Bases.map((base) => (
         <StyledLink to={`/adjustable/${base.uri}`} key={base.id} onMouseEnter={prefetch(base.uri)}>
         <H3>{base.fullName}</H3>
         <InfoWrapper>
           <Img src={`https://media.graphcms.com/resize=w:400,h:350,fit:clip/${base.coverImg.handle}`} alt="this"/>
           <AdjMarkdown source={base.features} escapeHtml={false} />
         </InfoWrapper>
       </StyledLink>


        // <AdjHoc uri={base.uri} key={base.id} img={base.coverImg.handle} markdown={base.features} fullName={base.fullName}/>
      
      ))}
      </Main>
    )
  }
  return null
};

export const allAdjustables = gql`
  query allAdjustables {
    Bases: allAdjBaseses(orderBy: value_ASC) {
      uri
      id
      fullName
      features
      coverImg {
        handle
    }
  }
}
`;
export default withApollo(graphql(allAdjustables)(AdjustableComponent));