import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { GameContainer, TurnCounter, BoardContainer, Button } from './GameStyles'

import Square from '../Square';

const images = (url = 'SocialImages') => {
  const img = require('../' + url)
  return [
    img.i1, img.i2, img.i3, img.i4, img.i6, img.i7, img.i8, img.i9, img.i10, img.i11, img.i12, img.i13, img.i14, img.i15, img.i16, img.i17, img.i18, img.i19, img.i20, img.i21, img.i22, img.i23, img.i24, img.i25, img.i26, img.i27, img.i28, img.i29, img.i30, img.i31, img.i32, img.i33, img.i34, img.i35, img.i36, img.i37, img.i38, img.i39, img.i40, img.i41, img.i42, img.i43, img.i44, img.i45, img.i46, img.i47, img.i48, img.i49
  ]
}

const generateSquares = (quantityOfSquares) => {
  const initSquares = [];
  let possible = images();
  let isNewPair = true;
  let currentImg = '';
  for (let i = 0; i < quantityOfSquares; i++) {
    if (isNewPair) currentImg = possible[Math.floor(Math.random() * possible.length)];

    isNewPair = !isNewPair;
    possible.splice(possible.indexOf(currentImg), 1);

    initSquares.push({
      id: i, content: currentImg, turned: false, matched: false
    })
  }
  return shuffle(initSquares);
}

const shuffle = (a) => {
  var j, x, i;
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

const initState = (quantityOfSquares) => ({
  squares: [...generateSquares(quantityOfSquares)],
  activeSquare: {},
  turnCounter: 0,
  gameIsEnd: false
})


class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      squares: props.cookies.get('squares') || [...generateSquares(props.Settings.quantityOfSquares)],
      activeSquare: props.cookies.get('activeSquare') || {},
      turnCounter: parseInt(props.cookies.get('turnCounter')) || 0,
      gameIsEnd: false
    }
  }

  onTurn(sq) {
    const { squares, activeSquare, turnCounter } = this.state;
    let test = this.state.squares.filter(el => el.matched === false && el.turned === true).length;

    if (!this.props.cookies.get('gameStarted')) {
      this.props.cookies.set('gameStarted', true)
    }

    if (test < 2) {
      const newSquares = [...squares];
      const currentSquare = newSquares[sq];
      currentSquare.turned = !currentSquare.turned;

      if (currentSquare.content === activeSquare.content) {
        currentSquare.matched = true;
        newSquares[activeSquare.id].matched = true;
      }
      this.changeSquares(newSquares);
      this.changeActiveSquare(currentSquare);
    }

    if (test === 1) {
      this.changeTurnCounter(turnCounter);
      setTimeout(() => this.resetUnmatched(), 500);
    }

    if (squares.every(s => s.matched === true)) {
      this.changeEndGameFlag(true)
    }
  }

  changeActiveSquare(activeSquare) {
    this.props.cookies.set('activeSquare', activeSquare)
    this.setState({ activeSquare });
  }

  changeTurnCounter(prevTurnCounter) {
    const turnCounter = prevTurnCounter + 1;
    this.props.cookies.set('turnCounter', turnCounter);
    this.setState({ turnCounter });
  }

  changeSquares(newSquares) {
    this.props.cookies.set('squares', newSquares);
    this.setState({ squares: newSquares });
  }

  changeEndGameFlag(gameIsEnd) {
    this.props.cookies.set('gameIsEnd', gameIsEnd);
    this.setState({ gameIsEnd })
  }

  resetUnmatched() {
    const newSquares = [...this.state.squares];
    newSquares.forEach(elem => elem.matched === false ? elem.turned = false : elem.turned)
    this.changeSquares(newSquares);
    this.changeActiveSquare({});
  }

  resetGame() {
    const { quantityOfSquares, cookies } = this.props;
    cookies.remove('gameStarted');
    cookies.remove('squares');
    cookies.remove('turnCounter');
    cookies.remove('activeSquare');
    cookies.remove('gameIsEnd');
    this.setState({ ...JSON.parse(JSON.stringify(initState(quantityOfSquares))) });
  }

  render() {
    const { turnCounter, gameIsEnd } = this.state;
    const { quantityOfSquares } = this.props.Settings;
    return (
      <GameContainer>
        <TurnCounter>
          {gameIsEnd ? `Gra zakończona! Twój wynik to: ${turnCounter}` : `Ilość tur:  ${turnCounter}`}
        </TurnCounter>
        <BoardContainer repeat={quantityOfSquares / 4}>
          {this.state.squares.map(
            sq => <Square {...sq} key={sq.id} onTurn={() => this.onTurn(sq.id)} />
          )}
        </BoardContainer>
        <Button onClick={() => this.resetGame()}>
          {gameIsEnd ? `Zagraj ponownie` : `Reset`}
        </Button>
      </GameContainer>
    )
  }
}

export default withCookies(Game);