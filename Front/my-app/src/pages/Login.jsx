import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  align-items: center;
`
const Wrapper = styled.div`
  width: 30%;
  padding: 50px;
  background: lightblue; 
  text-align: center;
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
  flex-direction: column;
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
  margin-top: 5px;
  flex: 0.5;
  margin-bottom: 10px;
`

const Link = styled.a`
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  margin: 5px 0px;
`

const Login = () => {
  return (
    <Container>
       <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="user name"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE NEW ACCOUNT</Link>
        </Form>
       </Wrapper>
    </Container>
  )
}

export default Login
