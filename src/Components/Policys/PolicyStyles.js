import styled from 'styled-components';


export const MainArticle = styled.article`
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
`;

export const Headline = styled.h2`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #1565c0;
  color: white;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  letter-spacing: .25rem;
  font-size: 1.2rem;
  @media(min-width: 768px) {
    font-size: 2rem;
  }
`;