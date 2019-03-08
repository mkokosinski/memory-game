import React, { useState } from 'react'
import { Container, Menu, MenuContainer } from './HomeStyes'



export default function Settings(props) {
  const [value] = useState(props.quantityOfSquares)
  const changeHandler = (e) => {
    props.changeQuantityOfSquares(e.target.value)
  }
  return (
    <Container>
      <MenuContainer>
        <Menu bgColor='white'>
          <label htmlFor="qOfSquares">Ilość elementów: </label> 
          <select name="qOfSquares" id="qOfSquares" onChange={changeHandler} value={value}>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
        </Menu>
      </MenuContainer>
    </Container>
  )
}