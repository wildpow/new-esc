import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Promo, BR, BigPromo, PromoLink } from './TopperStyles';

const TopPromo = ({data: {loading, error, allToppers }}) => {
  if (error) return <Promo> Welcome to E.S.C. Mattress Center</Promo>
  if (!loading) {
    return (
      <PromoLink to="/current-sale"><BigPromo>{allToppers[0].currentpromo}</BigPromo></PromoLink>
    )
  }
  return <Promo>Welcome to E.S.C.<BR/> Mattress Center</Promo>
};

export const allToppers = gql`
  query Toppers {
    allToppers {
      currentpromo 
    }
  }
`;

export default graphql(allToppers)(TopPromo);