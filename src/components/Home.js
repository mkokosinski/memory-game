
import React from 'react'
import { withCookies } from 'react-cookie';
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`

const MenuContainer = styled.ul`
    padding:40px;
`
const Menu = styled.ul`
    background-color: red;
    border-radius:4px;
    box-shadow: 0 1px 10px -2px rgba(0,0,0,0.5);
    list-style: none;
    margin:0;
    padding:0;
`

const Item = styled.li`
    background-color: #D7CCC8; 
    border: 1px solid #BCAAA4;
    border-collapse:collapse;
    font-weight: bold;
    padding:20px 60px;
    text-transform: uppercase;
    text-align:center;
    cursor: pointer;
    transition: background-color ease-out 200ms;
    user-select: none;

    :hover{
        background-color:#EFEBE9;
    }

    :active{
        background-color:#e6dedb;
    }
`



const Home = ({ cookies, changeQuantityOfSquares, history }) => {
  const canResume = cookies.get('gameStarted') || cookies.get('gameStarted');
  const newGameHandler = () => {
    cookies.remove('gameStarted');
    cookies.remove('squares');
    cookies.remove('turnCounter');
    cookies.remove('activeSquare');
    cookies.remove('gameIsEnd');

    history.push('/Game')
  }

  const resumeGameHandler = () => {
    if (canResume) {
      history.push('/Game')
    }
  }

  return (
    <Container>
      <MenuContainer>
        <Menu>
          {canResume ? <Item onClick={resumeGameHandler} >Resume</Item> : null}
          <Item onClick={newGameHandler}>New game</Item>
          {/* <Item>Settings</Item> */}
          <Item>Exit</Item>
        </Menu>
      </MenuContainer>
    </Container>

  )
}


export default withCookies(Home);