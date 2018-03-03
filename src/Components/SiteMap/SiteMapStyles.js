import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MattLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 15px;
`

export const Main = styled.div`
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
    ul {
      list-style: none;
      line-height: 1.8rem;
    }
    li {
      font-family: 'Open Sans', sans-serif;
    }
    h3 {
      font-family: 'Roboto', sans-serif;
    }
`;

export const SiteLinks = styled(Link)`
    color: #1565c0;
  &:hover {
    color: #eb1c24;
  }
`;

export const MainLinks = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  ul {
    list-style: none;
    line-height: 1.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 0;
    }
    li {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3rem;
      letter-spacing: .1rem;
    }
    h2 {
      font-family: 'Roboto', sans-serif;
      text-align: center;
      background-color: #1565c0;
      color: white;
      margin: 0;
      padding-top: 15px;
      padding-bottom: 15px;
      letter-spacing: .25rem;
      font-size: 2rem;
    }
`;

