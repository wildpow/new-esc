import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainFont2 } from '../../Styles';

export const BreadWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: .9rem;
  /* font-family: ${ MainFont2 }; */
  display: flex;
  @media(min-width: 1022px) {
    display: ${props => props.hidenLarge ? 'none' : 'flex' };
  }
`;

const BreadCrumbs = (props) => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <span>></span>
      {props.next&&
      <div>
        <Link to={`/${props.next}`}>{props.next}</Link>
        <span>></span>
      </div>
      }
      {props.here}
    </Fragment>
  )
}

export default BreadCrumbs;