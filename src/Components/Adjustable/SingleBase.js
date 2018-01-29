import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
// import Markdown from 'react-markdown'
import '../../app.css';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
border: 2px solid black;
justify-content: center;
`;
const MainTitle = styled.header`
font-family: 'Roboto', sans-serif;
font-size: 1.2rem;
padding: 0px 30px 0px 30px;
background-color: #1565c0;
color: white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

`;
const SingleBase = ({data: { loading, error, base}}) => {
  if (error) return <h1>Error fetching the base</h1>
  if (!loading) {
    return(
      <Wrapper className="animated fadeIn">
        <MainTitle>
          <h1>{base.fullName}</h1>
        </MainTitle>
        <div>

        </div>

      </Wrapper>
    )
  }
  return <h3>loading base</h3>
}

export const singleBase = gql`
query singleBase($id: ID!) {
  base: AdjBases(id: $id) {
    id
    fullName
    keyfeatures
    features
    price
    brandLine
    brandName
    baseDescription
    height
    coverImg {
      handle
    }
    detail1 {
      handle
    }
    detail2 {
      handle
    }
  }
}
`
export default graphql(singleBase, {
  options: ({ match }) => ({
    variables: {
      id: match.params.id
    }
  })
})(SingleBase)