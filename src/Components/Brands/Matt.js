import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  border: 2px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
  border-top-left-radius: .14rem;
  border-top-right-radius: .14rem;
  border-bottom-right-radius: .14rem;
  border-bottom-left-radius: .14rem;
`;
// const MattWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: .2rem;
//   margin: 0;
//   width: 100px;
// `;
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column !important;
  text-decoration: none;
  justify-content: space-between;
  margin: 0;
  
`;
const Img = styled.img`
  margin: 0  auto;
  align-self: center;
`;
const Name = styled.p`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  
`;
const Matt = ({data}) => {
  const uri = `/brands/sealy/${data.id}`;
  return (
    <Wrapper id={data.id}>
      <StyledLink to={uri} id={data.id}>
        <Img src={`https://media.graphcms.com/resize=w:200,h:200,fit:clip/${data.coverImg.handle}`} alt="this"/>
        <Name>{data.subBrand}<br/>{data.subName}</Name>
      </StyledLink>
    </Wrapper>
  )
}

export default Matt

//${data.subName.replace(" ","_")}