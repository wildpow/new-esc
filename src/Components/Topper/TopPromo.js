import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Promo } from './TopperStyles';

const TopPromo = ({data: {loading, error, allToppers }}) => {
  if (error) return <Promo> Welcome to E.S.C. Mattress Center</Promo>
  if (!loading) {
    return (
      <Promo>{allToppers[0].currentpromo}</Promo>
    )
  }
  return <Promo>Welcome to E.S.C. Mattress Center</Promo>
};

export const allToppers = gql`
  query Toppers {
    allToppers {
      currentpromo 
    }
  }
`;

export default graphql(allToppers)(TopPromo);