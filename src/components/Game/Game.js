import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { GameContainer, TurnCounter, BoardContainer, Button } from './GameStyles'

import Tile from './Tile';
import { LanguageContext } from '../Context';

const images = (url = 'SocialImages') => {
  const img = require('../' + url)
  return [
    img.i1, img.i2, img.i3, img.i4, img.i6, img.i7, img.i8, img.i9, img.i10, img.i11, img.i12, img.i13, img.i14, img.i15, img.i16, img.i17, img.i18, img.i19, img.i20, img.i21, img.i22, img.i23, img.i24, img.i25, img.i26, img.i27, img.i28, img.i29, img.i30, img.i31, img.i32, img.i33, img.i34, img.i35, img.i36, img.i37, img.i38, img.i39, img.i40, img.i41, img.i42, img.i43, img.i44, img.i45, img.i46, img.i47, img.i48, img.i49
  ]
}

const generateTiles = (quantityOfTiles) => {
  const initTiles = [];
  let possible = images();
  let isNewPair = true;
  let currentImg = '';
  for (let i = 0; i < quantityOfTiles; i++) {
    if (isNewPair) currentImg = possible[Math.floor(Math.random() * possible.length)];

    isNewPair = !isNewPair;
    possible.splice(possible.indexOf(currentImg), 1);

    initTiles.push({
      id: i, content: currentImg, turned: false, matched: false
    })
  }
  return shuffle(initTiles);
}

const shuffle = (a) => {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  for (let i = 0; i < a.length; i++) {
    a[i].id = i;
  }
  return [...a];
}

const initState = (quantityOfTiles) => ({
  tiles: [...generateTiles(quantityOfTiles)],
  activeTile: {},
  turnCounter: 0,
  gameIsEnd: false
})

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [],
      activeTile: {},
      turnCounter: 0,
      gameIsEnd: false
    }
  }

  componentDidMount = () => {
    const { quantityOfTiles } = this.context;
    console.log(quantityOfTiles);
    
    const {cookies} = this.props;
    this.setState({
      tiles: cookies.get('tiles') || [...generateTiles(quantityOfTiles)],
      activeTile: cookies.get('activeTile') || {},
      turnCounter: parseInt(cookies.get('turnCounter')) || 0,
      gameIsEnd: false
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.tiles !== this.state.tiles
  }

  onTurn(sq) {
    const { tiles, activeTile, turnCounter } = this.state;
    let turnedTilesCount = this.state.tiles.filter(el => el.matched === false && el.turned === true).length;

    if (!this.props.cookies.get('gameStarted')) {
      this.props.cookies.set('gameStarted', true)
    }

    if (turnedTilesCount < 2) {
      const newTiles = [...tiles];
      const currentTile = newTiles[sq];
      currentTile.turned = !currentTile.turned;

      if (currentTile.content === activeTile.content) {
        currentTile.matched = true;
        newTiles[activeTile.id].matched = true;
      }
      this.changeTiles(newTiles);
      this.changeActiveTile(currentTile);
    }

    if (turnedTilesCount === 1) {
      this.changeTurnCounter(turnCounter);
      setTimeout(() => this.resetUnmatched(), 500);
    }

    if (tiles.every(s => s.matched === true)) {
      this.changeEndGameFlag(true)
    }
  }

  changeActiveTile(activeTile) {
    this.props.cookies.set('activeTile', activeTile)
    this.setState({ activeTile });
  }

  changeTurnCounter(prevTurnCounter) {
    const turnCounter = prevTurnCounter + 1;
    this.props.cookies.set('turnCounter', turnCounter);
    this.setState({ turnCounter });
  }

  changeTiles(newTiles) {
    this.props.cookies.set('tiles', newTiles);
    this.setState({ tiles: newTiles });
  }

  changeEndGameFlag(gameIsEnd) {
    this.props.cookies.set('gameIsEnd', gameIsEnd);
    this.setState({ gameIsEnd })
  }

  resetUnmatched() {
    const newTiles = [...this.state.tiles];
    newTiles.forEach(elem => elem.matched === false ? elem.turned = false : elem.turned)
    this.changeTiles(newTiles);
    this.changeActiveTile({});
  }

  resetGame() {
    const { cookies } = this.props;
    const quantityOfTiles = this.state.tiles.length;
    cookies.remove('gameStarted');
    cookies.remove('tiles');
    cookies.remove('turnCounter');
    cookies.remove('activeTile');
    cookies.remove('gameIsEnd');
    this.setState({ ...JSON.parse(JSON.stringify(initState(quantityOfTiles))) });
  }

  render() {
    const { turnCounter, gameIsEnd } = this.state;
    const quantityOfTiles = this.state.tiles.length;
    const repeat = Math.floor(Math.sqrt(quantityOfTiles));
    return (
      <LanguageContext.Consumer>
        {({language:lang}) => (
            <GameContainer>
              <TurnCounter>
                {gameIsEnd ? `${lang.dictionary.endGameMessage} ${turnCounter}` : `${lang.dictionary.roundCount}  ${turnCounter}`}
              </TurnCounter>
              <BoardContainer repeat={repeat}>
                {this.state.tiles.map(
                  sq => <Tile {...sq} key={sq.id} onTurn={() => this.onTurn(sq.id)} />
                )}
              </BoardContainer>
              <Button onClick={() => this.resetGame()}>
                {gameIsEnd ? lang.dictionary.playAgain : lang.dictionary.resetGame}
              </Button>
          </GameContainer>
        )}
      </LanguageContext.Consumer>

    )
  }
}
Game.contextType = LanguageContext;
export default withCookies(Game);