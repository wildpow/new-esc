import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import styled from 'styled-components';

export const Promo = styled.p`
  margin: 0;
  padding: 0;
`;

const TopPromo = ({data: {loading, error, allToppers }}) => {
  if (error) return <Promo> Welcome to E.S.C. Mattress Center</Promo>
  if (!loading) {
    return (
      <Promo>{allToppers[0].currentpromo}</Promo>
    )
  }
  return <Promo>E.S.C Mattress Center Rocks!</Promo>
};

export const allToppers = gql`
  query Toppers {
    allToppers {
      currentpromo
    }
  }
`;

export default graphql(allToppers)(TopPromo);