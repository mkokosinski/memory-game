import React, { Component } from 'react'
import styled from 'styled-components'
import { withCookies } from 'react-cookie'

import Square from './Square';



const GameContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
  grid-gap: 5px;
`
const BoardContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
`

const Button = styled.div`
  background-color:#555555;
  border: 1px solid gray;
  color: #fff;
  display: block; 
  padding: 20px 10px;
  text-align: center;

  :hover{
  background-color:#666;
  cursor: pointer;
  transition: background-color ease 500ms;
  }
`

const generateSquares = (quantityOfSquares) => {
  const initSquares = [];
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let isNewPair = true;
  let char = '';
  for (let i = 0; i < quantityOfSquares; i++) {
    if (isNewPair) char = possible.charAt(Math.floor(Math.random() * possible.length));


    possible.replace(char, '');
    isNewPair = !isNewPair;

    initSquares.push({
      id: i, content: char, turned: false, matched: false
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
      squares: props.cookies.get('squares') || [...generateSquares(props.quantityOfSquares)],
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
    const {quantityOfSquares, cookies} = this.props;
    cookies.remove('gameStarted');
    cookies.remove('squares');
    cookies.remove('turnCounter');
    cookies.remove('activeSquare');
    cookies.remove('gameIsEnd');
    this.setState({ ...JSON.parse(JSON.stringify(initState(quantityOfSquares))) });
  }

  render() {
    const { turnCounter, gameIsEnd } = this.state;
    return (
      <GameContainer>
        <div>
          {gameIsEnd ? `Gra zakończona! Twój wynik to: ${turnCounter}` : `Ilość tur:  ${turnCounter}`}
        </div>
        <BoardContainer>
          {this.state.squares.map(
            sq => <Square {...sq} key={sq.id} onTurn={() => this.onTurn(sq.id)} />
          )}
        </BoardContainer>
        <Button onClick={() => this.resetGame()}>
          {gameIsEnd ? `Zagraj ponownie`: `Reset`}
        </Button>
      </GameContainer>
    )
  }
}

export default withCookies(Game);