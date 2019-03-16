
import React, { useContext } from 'react'
import { withCookies } from 'react-cookie';
<<<<<<< HEAD
import { Container, Item, Menu, MenuContainer } from './HomeStyes'
import { LanguageContext } from '../Context';
=======
import {Container, Item, Menu} from './HomeStyes'
>>>>>>> 5afbe8c15488350c4033c73c108624cc22d7a5e2

const Home = ({ cookies, history, lan }) => {
  const lang = useContext(LanguageContext);

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
        <Menu>
          {canResume ? <Item onClick={resumeGameHandler} >{lang.resume}</Item> : null}
          <Item onClick={newGameHandler}>{lang.newGame}</Item>
          <Item onClick={settingsClickHandler}>{lang.settings}</Item>
          <Item>{lang.exit}</Item>
        </Menu>
    </Container>

  )
}


export default withCookies(Home);