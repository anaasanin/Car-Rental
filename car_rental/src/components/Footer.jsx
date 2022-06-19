import { Facebook, YouTube , Instagram, Twitter, Room, Phone, MailOutline} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: #1f2937;
    color: white;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #4B5563;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &:hover{
        color:#4B5563;
        background-color: white;
        cursor: pointer;
    }
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    max-width: 80px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ProCar</Logo>
            <Desc>ProCar is part of Pro Real Agencies inc, the world leader in digital business & related services. ProCar rental is an Appointed Representative of Zetta Limited, which is authorised and registered by the Fintech Beings inc. , Firm Reference No 750711.
InsExtrance Insurance Limited is incorporated in Montenegro and is authorised by the Swiss Financial Services Authority to carry on the business of insurance in terms of the Insurance Business Act 1996. Company Registration Number: C82173.</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
                <SocialIcon>
                    <YouTube />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Car Categories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Favourites</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>
                Podgorica, Montenegro
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}} />
                +382 60 000 000
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}} />
                info@procar.me
            </ContactItem>
            <Payment src="https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png" />
        </Right>
    </Container>
  )
}

export default Footer