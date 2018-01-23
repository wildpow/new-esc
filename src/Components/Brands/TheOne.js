import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Theone = ({data: { loading, error, mattress}}) => {
  if (error) return <h1>Error{console.log(mattress)}</h1>
  if (!loading) {
    return (
      <div>
        <h1>{console.log(mattress)}</h1>
      </div>
    )
  }
  return <h1>loading stuff</h1>
}

export const singleMattress = gql`
  query singleMattress($id: ID!) {
    mattress: Mattress(id: $id) {
  	  id
      subName
      subBrand
      name
      discription
      features
      profile
      contruction
      mattOnly
      setPrice
      warranty
  }
  }`


export default graphql(singleMattress, {
  options: ({ match }) => ({
    variables: {
      mattress: match.params.id
    }
  })
})(Theone);