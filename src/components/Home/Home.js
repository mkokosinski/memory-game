import React, { useContext } from 'react'
import { withCookies } from 'react-cookie';

//own components
import { CookieName, Path } from '../../config';
import { LanguageContext } from '../Context';
import { Container, Item, Menu, MenuContainer } from './HomeStyes'

const Home = ({ cookies, history }) => {
  const lang = useContext(LanguageContext).language.dictionary;

  const canResume = cookies.get(CookieName.GAME_STARTED) || cookies.get(CookieName.GAME_STARTED);
  const handleStartNewGame = () => {
    cookies.remove(CookieName.GAME_STARTED);
    cookies.remove(CookieName.TILES);
    cookies.remove(CookieName.ROUNDS_COUNTER);
    cookies.remove(CookieName.ACTIVE_TILE);
    cookies.remove(CookieName.GAME_IS_COMPLETED);

    history.push(Path.GAME)
  }
  const handleResumeClick = () => canResume ?  history.push(Path.GAME) : null;
  const handleSettingsClick = () => history.push(Path.SETTINGS);
  const handleExitClick = () => window.location = Path.DEV_REPOSITORY;
  return (
    <Container>
      <MenuContainer>
        <Menu>
          {canResume ? <Item onClick={handleResumeClick} >{lang.resume}</Item> : null}
          <Item onClick={handleStartNewGame}>{lang.newGame}</Item>
          <Item onClick={handleSettingsClick}>{lang.settings}</Item>
          <Item onClick={handleExitClick} >{lang.exit}</Item>
        </Menu>
      </MenuContainer>
    </Container>

  )
}


export default withCookies(Home);