import { Euro, DirectionsCar , AccessTime , DateRange, LocalGasStation, Settings, Security} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

const KEY = "pk_test_51KxxDBDbLSuM41J3R2UzUIpPJ2bNpubzhY0Pg5tzVr7AjJ8JgeDx9X2EVMuhbrvGPe079eEr2iQ63dqugfhfGkQE00bD6Awm3k";

const Container = styled.div`
    color: #1f2937;
`;

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#4b5563" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
    margin-top: 50px;
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  max-width: 250px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const ProductFuel = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const ProductInsurance = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const ProductGear = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const ProductDate = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const ProductDaysAmount = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 40vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4b5563;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) =>{
    setStripeToken(token);
  };
  const navigate = useNavigate();

useEffect(() => {
  const makeRequest = async() => {
    try{
      const res = await userRequest.post("/checkout/payment", {
        tokenId: stripeToken.id,
        amount: cart.total*100,
      });
      navigate("/success");
    }
    catch{}
  };
  stripeToken && cart.total>0 && makeRequest();
},[stripeToken, cart.total, navigate])

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR RENT DETAILS</Title>
        <Top>
          <Link to="/products/cars">
            <TopButton>CONTINUE EXPLORING</TopButton>
          </Link>
          <TopTexts>
            <TopText>For Rent({cart.quantity})</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <StripeCheckout 
            name="ProCar"
            billingAddress
            shippingAddress
            description={`Your total amount for payment is €${cart.total}`}
            amount={cart.total*100}
            currency="EUR"
            token={onToken}
            stripeKey={KEY}
            >
              <TopButton type="filled">EMPTY THE CARD</TopButton>
            </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
          {cart.products.map((product) => (
          <Product>
              <ProductDetail>
                <Image src={product.img}/>
                <Details>
                  <ProductName>
                    <DirectionsCar /> {product.title}
                  </ProductName>
                  <ProductFuel> <LocalGasStation />{product.fuel}</ProductFuel>
                  <ProductGear> <Settings />{product.gear}</ProductGear>
                  <ProductInsurance><Security /> {product.insurance} insurance</ProductInsurance>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductDate> <DateRange />12.06.2022. - 15.06.2022.</ProductDate>
                <ProductDaysAmount><AccessTime />{product.days} day(s)</ProductDaysAmount>
                <ProductPrice><Euro /> {product.price}</ProductPrice>
              </PriceDetail>
            </Product>
          ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout 
            name="ProCar"
            billingAddress
            shippingAddress
            description={`Your total amount for payment is €${cart.total}`}
            amount={cart.total*100}
            currency="EUR"
            token={onToken}
            stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
