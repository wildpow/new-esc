import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { AdjMarkdown, Main, StyledLink, H3, InfoWrapper, Img} from './AdjustableStyles';

const AdjustableComponent = ({ data: {error, loading, Bases} }) => {
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    return (
    <Main className="animated fadeIn">
      {Bases.map((base) => (
        <StyledLink to={`/adjustable/${base.id}`} key={base.id}>
          <H3>{base.fullName}</H3>
          <InfoWrapper>
            <Img src={`https://media.graphcms.com/resize=w:400,h:350,fit:clip/${base.coverImg.handle}`} alt="this"/>
            <AdjMarkdown source={base.features} escapeHtml={false} />
          </InfoWrapper>
        </StyledLink>
      ))}
      </Main>
    )
  }
  return null
};

export const allAdjustables = gql`
  query allAdjustables {
    Bases: allAdjBaseses {
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