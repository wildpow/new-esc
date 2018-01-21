import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'


const Sealy = ({ data: { loading, error, Brands} }) => {
  if (error) return <h1>Sorry try again</h1>
  if(!loading) {
    return (
      <div>
        {Brands.mattresses.map((mattress) => {
          return (
            <div  key={mattress.id}>
            <img src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${mattress.coverImg.handle}`} alt="this"/>
              <h2>{mattress.name}</h2>
            </div>)
        })}
      </div>
    )
  }
  return <h1>Loading</h1>
}


export const sealyMattresses = gql`
  query sealyMattresses {
    Brands(brand:"Sealy") {
      mattresses {
        id
        name
        coverImg {
          handle
        }
      }
    }
  }
` 


export default graphql(sealyMattresses)(Sealy);


//{/* {console.log(mattress.price.mattressOnlyPrice)} */}

// { let {price} = mattress; }