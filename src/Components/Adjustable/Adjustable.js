import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Helmet } from "react-helmet";
import { Main} from './AdjustableStyles';
import AdjHoc from './adjHOC';
import Loading from '../Loading/Loading';

const AdjustableComponent = ({ data: {error, loading, Bases} }, client) => {
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    return (
    <Main>
      
      <Helmet>
        <title>ESC: Ajustable Bases</title>
        <meta name="description" content="E.S.C. Mattress Center carry 4 different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."/>
        
        <meta name="twitter:image:alt" content="E.S.C Matress Center"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        {/* <meta property="og:url" content="https://www.escmattresscenter.com/adjustable"/> */}
        <meta property="og:description" content="Sleep like the experts do."/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="1200"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
      </Helmet>
      {Bases.map((base) => (
        <AdjHoc uri={base.uri} key={base.id} img={base.coverImg.handle} markdown={base.features} fullName={base.fullName}/>
      
      ))}
      </Main>
    )
  }
  return <Loading/>
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
export default graphql(allAdjustables)(AdjustableComponent);