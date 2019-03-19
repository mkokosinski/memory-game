
import React, { useContext } from 'react'
import { withCookies } from 'react-cookie';
import { Container, Item, Menu, MenuContainer } from './HomeStyes'
import { LanguageContext } from '../Context';

const Home = ({ cookies, history }) => {
  const lang = useContext(LanguageContext).language.dictionary;

  const canResume = cookies.get('gameStarted') || cookies.get('gameStarted');
  const newGameHandler = () => {
    cookies.remove('gameStarted');
    cookies.remove('tiles');
    cookies.remove('turnCounter');
    cookies.remove('activeTile');
    cookies.remove('gameIsEnd');

    history.push('/Game')
  }
  const handleResumeClick = () => canResume ?  history.push('/Game') : null;
  const handleSettingsClick = () => history.push('/Settings');
  const handleExitClick = () => window.location = 'https://github.com/mkokosinski/';
  return (
    <Container>
      <MenuContainer>
        <Menu>
          {canResume ? <Item onClick={handleResumeClick} >{lang.resume}</Item> : null}
          <Item onClick={newGameHandler}>{lang.newGame}</Item>
          <Item onClick={handleSettingsClick}>{lang.settings}</Item>
          <Item onClick={handleExitClick} >{lang.exit}</Item>
        </Menu>
      </MenuContainer>
    </Container>

  )
}


export default withCookies(Home);