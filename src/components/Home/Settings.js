import React, { useState } from 'react'
import { Container, Menu, Item } from './HomeStyes'



export default function Settings(props) {
  const [value] = useState(props.Settings.quantityOfSquares)
  const changeHandler = (e) => {
    const {name, value} = e.target;
    props.changeSettingsHandler({[name]: value})
    
  }
  const backButtonHandler = () =>{
    props.history.goBack();
  }
  return (
    <Container>
        <Menu bgColor='white'>
          <label htmlFor="quantityOfSquares">Ilość elementów: </label> 
          <select name="quantityOfSquares" id="quantityOfSquares" onChange={changeHandler} value={value}>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
          <Item onClick={backButtonHandler}> {`<- Wróć`} </Item>
        </Menu>
    </Container>
  )
}
