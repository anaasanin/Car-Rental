import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DatePicker from 'react-datepicker'
import Newsletter from '../components/Newsletter'
import 'react-datepicker/dist/react-datepicker.css'
import { Euro, LocalGasStation, Router, Security, Settings, Straighten, Timelapse} from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";

const Container=styled.div`
    color: #1f2937;
`

const Wrapper=styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer=styled.div`
    flex:2;

`

const Image=styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`


const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
`

const Title=styled.h1`
    font-weight: 200;
`

const Desc=styled.p`
    margin: 20px 0px;
`

const Feature = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Button = styled.button`
    margin-top: 20px;
    width: 100px;
    padding: 10px;
    border: 2px solid #4b5563;
    font-weight: 600;
    cursor: pointer;
    background-color: white;
    &:hover{
        background-color: #4b5563;
        color: white;
    }
`

const DateWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`

const DateText = styled.h3`
    font-size: 20px;
    font-weight: 700;
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const dd=0;

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data);
            }catch{

            }
        };
        getProduct();
    }, [id])

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [quantity, setQuantity] = useState(1);
    const [days, setDays] = useState(3);


    const handleClick = () => {
        dispatch(addProduct({...product, quantity, days}));
        setQuantity(quantity + 1);
        setDays(days+dd);
    };

    function handleSubmit(event) {
        event.preventDefault();
        handleClick();
      }

      function clicked(x){
        var time = (endDate.getTime() - startDate.getTime())/(1000 * 3600 * 24);
        x=time;
        console.log(x);
      }

  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Feature><Timelapse />{product.year} year</Feature>
                <Feature><Straighten />{product.mileage} km</Feature>
                <Feature><LocalGasStation /> {product.fuel}</Feature>
                <Feature><Settings /> {product.gear}</Feature>
                <Feature><Security />{product.insurance} insurance</Feature>
                <Feature><Euro />{product.price} daily</Feature>
                <DateWrapper onSubmit={handleSubmit} on>
                    <DateText>Book Your Dates</DateText>
                    <DatePicker
                    required
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }                    
                    }
                    
                    placeholderText='Choose the interval'
                    />   
                    <Button type='submit' onClick={(dd)=>clicked}>Add to cart</Button>              
                </DateWrapper>
                
            </InfoContainer>
            
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Product