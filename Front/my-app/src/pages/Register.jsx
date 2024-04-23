import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 50px;
  background: lightblue;
  margin: auto;
  margin-top: 50px;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 20%;
  border: none;
  font-color: white;
  padding: 15px 20px;
  cursor: pointer;
  margin: auto;
  margin-top: 20px
`

const Register = () => {
  return (
    <Container>
       <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="Email"/>
            <Input placeholder="user name"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Button>CREATE</Button>
        </Form>
       </Wrapper>
    </Container>
  )
}


export default Register
