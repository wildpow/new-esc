import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import Matt from './Matt'

const Wrapper = styled.div`
display: flex;
flex-direction: row;
margin: 0;
flex-wrap: wrap;
flex-basis: 100%;
`

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  if (error) return <h1>Sorry try again</h1>
  if(!loading) {
    return (
      <Wrapper>
        <Wrapper>
          {essentials.mattresses.map((mattress) => {
            return (
              <Matt key={mattress.id} data={mattress} />
            )
        })}
        {performance.mattresses.map((mattress) => {
            return (
              <Matt key={mattress.id} data={mattress} />
            )
        })}
        {premium.mattresses.map((mattress) => {
            return (
              <Matt key={mattress.id} data={mattress} />
            )
        })}
      </Wrapper>
      </Wrapper>
    )
  }
  return <h1>Loading</h1>
}


export const sealyMattresses = gql`
  query subBrands {
    essentials: SubLine(subLineName: "essentials") {
    mattresses {
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
  },
  performance: SubLine(subLineName: "performance") {
    mattresses {
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
  },
    premium: SubLine(subLineName: "premium") {
    mattresses {
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
}

`;
// export const sealyMattresses = gql`
//   query sealyMattresses {
//     Brands(brand:"Sealy") {
//       mattresses {
//         id
//         subBrand
//         subName
//         coverImg {
//           handle
//         }
//       }
//     }
//   }
// ` 


export default graphql(sealyMattresses)(Sealy);


//{/* {console.log(mattress.price.mattressOnlyPrice)} */}

// { let {price} = mattress; }