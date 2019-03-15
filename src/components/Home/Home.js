
import React from 'react'
import { withCookies } from 'react-cookie';
import { Container, Item, Menu, MenuContainer } from './HomeStyes'

const Home = ({ cookies, history }) => {
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

  const settingsClickHandler = () => {
    history.push('/Settings')
  }

  return (
    <Container>
      <MenuContainer>
        <Menu>
          {canResume ? <Item onClick={resumeGameHandler} >Resume</Item> : null}
          <Item onClick={newGameHandler}>New game</Item>
          <Item onClick={settingsClickHandler}>Settings</Item>
          <Item>Exit</Item>
        </Menu>
      </MenuContainer>
    </Container>

  )
}


export default withCookies(Home);