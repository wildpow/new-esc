import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Helmet } from "react-helmet";
import { Main} from './AdjustableStyles';
import AdjHoc from './adjHOC';

const AdjustableComponent = ({ data: {error, loading, Bases} }, client) => {
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    return (
    <Main>
      
      <Helmet>
        <title>ESC: Ajustable Bases</title>
        <meta name="description" content="E.S.C. Mattress Center carry 4 different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."/>
      </Helmet>
      {Bases.map((base) => (
        <AdjHoc uri={base.uri} key={base.id} img={base.coverImg.handle} markdown={base.features} fullName={base.fullName}/>
      
      ))}
      </Main>
    )
  }
  return null
};

export const allAdjustables = gql`
  query allAdjustables {
    Bases: allAdjBaseses {
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