import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: #1f2937;
    font-size: 40px;
    font-weight: 600;
    background-color: transparent;
    text-decoration: none;
    &:hover {
    transform: scale(1.1);
  }
`



const Titles = () => {
  return (
    <Link to={`/products/cars`}>
      <Container>
        EXPLORE OUR OFFER
    </Container> 
    </Link>
        
  )
}

export default Titles