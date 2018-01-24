import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown'
import StearnsImg from '../../images/StearnsLogo.png'
const Sealy = ({ data: { loading, error, Brands} }) => {
  if (error) return <h1>Shit Cra Cra {console.log(error)}</h1>
  if(!loading) {
    return (
      <div>
        {Brands.mattresses.map((mattress) => {
          return (
            <div  key={mattress.id}>
              <h2>{mattress.name}</h2>
              <p>{mattress.discription}</p>
              <Markdown source={mattress.features} escapeHtml={false} />
              <p>Profile: {mattress.profile}</p>
              <Markdown source={mattress.contruction} escapeHtml={false} />
              <p>Mattress Only Price</p>
              <ul>
                <li>Twin: {mattress.mattOnly[0]}</li>
                <li>TwinXL: {mattress.mattOnly[1]}</li>
                <li>Full: {mattress.mattOnly[2]}</li>
                <li>Queen: {mattress.mattOnly[3]}</li>
                <li>King/Cal. King: {mattress.mattOnly[4]}</li>
              </ul>
              <p>Mattress Set Price</p>
              <ul>
                <li>Twin: {mattress.setPrice[0]}</li>
                <li>TwinXL: {mattress.setPrice[1]}</li>
                <li>Full: {mattress.setPrice[2]}</li>
                <li>Queen: {mattress.setPrice[3]}</li>
                <li>King/Cal. King: {mattress.setPrice[4]}</li>
              </ul>
              <p>Warranty: {mattress.warranty}</p>
              <img src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${mattress.coverImg.handle}`} alt="this"/>
              <img src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${mattress.detail1.handle}`} alt="this"/>
              <img src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${mattress.detail2.handle}`} alt="this"/>
            </div>)
        })}
      </div>
    )
  }
  return <h1>Loading</h1>
}


export const stearnsMattresses = gql`
  query stearnsMattresses {
    Brands(brand:"Stearns&Foster") {
      mattresses {
        id
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
` 


export default graphql(stearnsMattresses)(Sealy);