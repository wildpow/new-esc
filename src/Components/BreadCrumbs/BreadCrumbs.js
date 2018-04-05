import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainFont2, Blue } from '../../Styles';

export const BreadWrapper = styled.div`
  margin-top: ${props => props.Bottom ? '0px' : '12px'};
  margin-bottom: ${props => props.Bottom ? '0px' : '10px'};
  font-size: .9rem;
  font-family: ${ MainFont2 };
  display: flex;
  margin-right: ${props => props.Brands ? '15px' : '5px'};
  margin-left: ${props => props.Brands ? '15px' : '5px'};
  
  @media(min-width: 568px) {
    font-size: 1rem;
    margin-right: ${props => props.Brands ? '45px' : '5px'};
    margin-left: ${props => props.Brands ? '45px' : '5px'};
  }
  @media(min-width: 768px) {
    font-size: 1.1rem;
    /* margin-right: 25px;
    margin-left: 25px; */
  }
  @media(min-width: 1022px) {
    font-size: 1.2rem;
    display: ${props => props.hidenLarge ? 'none' : 'flex' };
  }
  @media(min-width: 1300px) {
    margin-right: ${props => props.Brands ? '55px' : '85px'};
    margin-left: ${props => props.Brands ? '55px' : '85px'};
  }
`;
const Span = styled.span`
  padding-right: 5px;
  padding-left: 5px;
  @media(min-width: 768px) {
    padding-right: 7px;
    padding-left: 7px;
  }
`;
const Crumbs = styled(Link)`
  color: ${Blue};
`;
const Location = styled.div`
  @media(max-width: 414px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BreadCrumbs = (props) => {
  return (
    <Fragment>
      <Crumbs to="/">Home</Crumbs>
      <Span>></Span>
      {props.next&&
      <div>
        
        <Crumbs to={`/${props.next}`}>{props.next}</Crumbs>
        <Span>></Span>
      </div>
      }
      {props.next2&&
        <div>
        <Crumbs to={`/${props.next}/${props.next2}`}>{props.next2}</Crumbs>
        <Span>></Span>
        </div>
      }
      <Location>{props.here}</Location>
    </Fragment>
  )
}

export default BreadCrumbs;