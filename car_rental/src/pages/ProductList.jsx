import React, { useState } from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Link, useLocation } from 'react-router-dom'


const Container = styled.div`
  color: #1f2937;
`

const Title = styled.h1`
font-weight: 600;
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

`

const Filter = styled.div`
margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`

const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="gear" onChange={handleFilters}>
            <Option selected disabled>Transmission</Option>
            <Option>automatic</Option>
            <Option>manual</Option>
          </Select>
          <Select name="category" onChange={handleFilters}>
            <Option selected disabled>Type</Option>
            <Option>sedan</Option>
            <Option>coupe</Option>
            <Option>hatchback</Option>
            <Option>jeep</Option>
            <Option>sports</Option>
            <Option>convertible</Option>
          </Select>
          <Select name="fuel" onChange={handleFilters}>
            <Option selected disabled>Fuel</Option>
            <Option>petrol</Option>
            <Option>diesel</Option>
            <Option>electric</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option selected>Unsorted</Option>
            <Option value="newest">Newest first</Option>
            <Option value="price">Price (Cheapest first)</Option>
            <Option value="mileage">Mileage (Least mileage first)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList