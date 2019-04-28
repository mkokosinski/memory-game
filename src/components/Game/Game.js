import React, { Component } from 'react'
import { withCookies } from 'react-cookie'

//own components
import { CookieName } from '../../config';
import { LanguageContext } from '../Context';
import { GameContainer, RoundsCounter, BoardContainer, Button } from './GameStyles'
import Tile from './Tile';

const getImages = (url = 'SocialImages') => {
  const img = require('../' + url)
  return [
    img.i1, img.i2, img.i3, img.i4, img.i6, img.i7, img.i8, img.i9, img.i10, img.i11, img.i12, img.i13, img.i14, img.i15, img.i16, img.i17, img.i18, img.i19, img.i20, img.i21, img.i22, img.i23, img.i24, img.i25, img.i26, img.i27, img.i28, img.i29, img.i30, img.i31, img.i32, img.i33, img.i34, img.i35, img.i36, img.i37, img.i38, img.i39, img.i40, img.i41, img.i42, img.i43, img.i44, img.i45, img.i46, img.i47, img.i48, img.i49
  ]
}

const generateTiles = (numberOfTiles) => {
  const tiles = [];
  let possibleImages = getImages();
  let isNewPair = true;
  let currentImg = '';
  for (let i = 0; i < numberOfTiles; i++) {
    if (isNewPair) currentImg = possibleImages[Math.floor(Math.random() * possibleImages.length)];

    isNewPair = !isNewPair;
    possibleImages.splice(possibleImages.indexOf(currentImg), 1);

    tiles.push({
      id: i, content: currentImg, isTurned: false, isMatched: false
    })
  }
  const shuffledTiles = shuffleTiles(tiles)

  return shuffledTiles;
}

const shuffleTiles = (tiles) => {
  let randomNumber, drawnTile;

  for (let i = tiles.length - 1; i > 0; i--) {
    randomNumber = Math.floor(Math.random() * (i + 1));
    drawnTile = tiles[i];
    tiles[i] = tiles[randomNumber];
    tiles[randomNumber] = drawnTile;
  }

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].id = i;
  }

  return [...tiles];
}

const initializeState = (numberOfTiles) => ({
  tiles: [...generateTiles(numberOfTiles)], //generateTiles returns array od tiles
  activeTile: {},
  roundsCounter: 0,
  gameIsCompleted: false
})

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [],
      activeTile: {},
      roundsCounter: 0,
      gameIsCompleted: false
    }
  }

  changeActiveTile(activeTile) {
    this.props.cookies.set(CookieName.ACTIVE_TILE, activeTile)
    this.setState({ activeTile });
  }

  changeRoundsCounter(prevRoundsCounter) {
    const roundsCounter = prevRoundsCounter + 1;
    this.props.cookies.set(CookieName.ROUNDS_COUNTER, roundsCounter);
    this.setState({ roundsCounter });
  }

  changeTiles(newTiles) {
    this.props.cookies.set(CookieName.TILES, newTiles);
    this.setState({ tiles: newTiles });
  }

  changeEndGameFlag(gameIsCompleted) {
    this.props.cookies.set(CookieName.GAME_IS_COMPLETED, gameIsCompleted);
    this.setState({ gameIsCompleted })
  }

  handleTileClick(clickedTile) {
    const { tiles, activeTile, roundsCounter } = this.state;
    const { cookies } = this.props;
    let turnedTilesCount = tiles.filter(tile => tile.isMatched === false && tile.isTurned === true).length;

    if (!cookies.get(CookieName.GAME_STARTED)) {
      cookies.set(CookieName.GAME_STARTED, true)
    }

    if (turnedTilesCount < 2) {
      const newTiles = [...tiles];
      const currentTile = newTiles[clickedTile];
      currentTile.isTurned = true;

      if (currentTile.content === activeTile.content) {
        currentTile.isMatched = true;
        newTiles[activeTile.id].isMatched = true;
      }
      this.changeTiles(newTiles);
      this.changeActiveTile(currentTile);
    }

    if (turnedTilesCount === 1) {
      this.changeRoundsCounter(roundsCounter);
      setTimeout(() => this.resetUnmatched(), 500);
    }

    if (tiles.every(s => s.isMatched === true)) {
      this.changeEndGameFlag(true)
    }
  }

  resetUnmatched() {
    const newTiles = [...this.state.tiles];
    newTiles.forEach(elem => elem.isMatched === false ? elem.isTurned = false : elem.isTurned)
    this.changeTiles(newTiles);
    this.changeActiveTile({});
  }

  resetGame() {
    const { cookies } = this.props;
    const numberOfTiles = this.state.tiles.length;
    cookies.remove(CookieName.GAME_STARTED);
    cookies.remove(CookieName.TILES);
    cookies.remove(CookieName.ROUNDS_COUNTER);
    cookies.remove(CookieName.ACTIVE_TILE);
    cookies.remove(CookieName.GAME_IS_COMPLETED);
    this.setState({ ...JSON.parse(JSON.stringify(initializeState(numberOfTiles))) }); // deep copy of tiles
  }

  // lifecycle methods

  componentDidMount = () => {
    const { numberOfTiles } = this.context;
    const { cookies } = this.props;
    this.setState({
      tiles: cookies.get(CookieName.TILES) || [...generateTiles(numberOfTiles)], //generateTiles returns array od tiles
      activeTile: cookies.get(CookieName.ACTIVE_TILE) || {},
      roundsCounter: parseInt(cookies.get(CookieName.ROUNDS_COUNTER)) || 0,
      gameIsCompleted: cookies.get(CookieName.GAME_IS_COMPLETED) || false
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.tiles !== this.state.tiles
  }

  render() {
    const { roundsCounter, gameIsCompleted, tiles } = this.state;
    const numberOfTiles = tiles.length;
    const repeat = Math.floor(Math.sqrt(numberOfTiles));
    return (
      <LanguageContext.Consumer>
        {({ language: lang }) => (
          <GameContainer>
            <RoundsCounter>
              {gameIsCompleted ? `${lang.dictionary.endGameMessage} ${roundsCounter}` : `${lang.dictionary.roundsCount}  ${roundsCounter}`}
            </RoundsCounter>
            <BoardContainer repeat={repeat}>
              {tiles.map(
                sq => <Tile {...sq} key={sq.id} onTurn={() => this.handleTileClick(sq.id)} />
              )}
            </BoardContainer>
            <Button onClick={() => this.resetGame()}>
              {gameIsCompleted ? lang.dictionary.playAgain : lang.dictionary.resetGame}
            </Button>
          </GameContainer>
        )}
      </LanguageContext.Consumer>

    )
  }
}
Game.contextType = LanguageContext;
export default withCookies(Game);