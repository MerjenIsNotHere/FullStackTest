import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div``

const Wrapper = styled.div`
  padding:20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const Bottom = styled.div``

const TopButton = styled.button`
  padding: 10px;
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Image = styled.img`
  margin-top: 50px;
  width: 400px;
`
const ProductName = styled.span``
const ProductID = styled.span``
const Price = styled.div`
  
`


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
            <TopButton>CONTINUE</TopButton>
            <TopButton>CHECK OUT</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://static.bax-shop.es/image/product/46222/161174/70fc5f26/450x450/Fender_Kurt_Cobain_Sonic_Blue.jpg"/>
                        <ProductName></ProductName>
                        <ProductID>134</ProductID>
                        <Price>1234</Price>
                    </ProductDetail>
                </Product>
            </Info>
        </Bottom>
       </Wrapper> 
    </Container>
  )
}

export default Cart
