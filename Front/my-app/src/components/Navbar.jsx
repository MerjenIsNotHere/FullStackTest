import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core';


const Container = styled.div`
   heigth: 60px;
  `;

const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;


const Rigth = styled.div`
  flex:1;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  justify-content: space-between;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Rigth>
          <SearchContainer>
            <Input/>
            <Search style={{color:"black", fontSize: 16}}/>
          </SearchContainer>
        </Rigth>
        <Center>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
           <Badge badgeContent={4} color='primary'>
            <ShoppingCartOutlined/> 
           </Badge>
          </MenuItem>
        </Center>
      </Wrapper>
    </Container>
  )
}

export default Navbar
