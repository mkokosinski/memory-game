import React, { Component } from 'react'
import styled from 'styled-components'
import { withCookies } from 'react-cookie'

import Square from './Square';
import {media} from '../MobileBreakpoints'



const GameContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px -3px rgba(0,0,0,0.7);
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;
  grid-gap: 5px;
  padding: 40px 60px;
  justify-content:center;
  

  ${media.desktop`padding:40px 60px; `}
  ${media.tablet`padding: 40px 40px;`}
  ${media.phablet`padding: 20px 20px;width: 100%;`}
  ${media.phone`padding: 20px 10px;width: 100%;`}
`
const BoardContainer = styled.div`
  align-items:stretch;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content:stretch;
  /* grid-template-rows: ${props => `repeat(${props.repeat}, 120px);`}; */
  grid-template-rows: ${props => `repeat(${props.repeat}, 1fr);`};
  grid-gap: 5px;
  width: 600px; height: 600px;

  
  ${media.desktop`width: 600px; height: 600px`}
  ${media.tablet`width: 500px; height: 500px`} 
  ${media.phablet`width: 100%; height:56vh`}
  ${media.phone`width: 100%; height: 55vh`}
`

const TurnCounter = styled.div`
  display: block; 


  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 0.9em;`}
  ${media.phablet`font-size: 0.7em;`}
  ${media.phone`font-size: .6em;`}
`


const Button = styled.div`
  background-color:#555555;
  border: 1px solid gray;
  color: #fff;
  display: block; 
  padding: 20px 10px;
  text-align: center; 

  ${media.desktop`font-size: 1em; padding: 20px 10px`}
  ${media.tablet`font-size: 0.9em; padding: 16px 10px`}
  ${media.phablet`font-size: 0.7em; padding: 12px 8px`}
  ${media.phone`font-size: .6em; padding: 10px 6px`}

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


    possible = possible.replace(char, '');
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
    const {quantityOfSquares} = this.props;
    return (
      <GameContainer>
        <TurnCounter>
          {gameIsEnd ? `Gra zakończona! Twój wynik to: ${turnCounter}` : `Ilość tur:  ${turnCounter}`}
        </TurnCounter>
        <BoardContainer repeat={quantityOfSquares/4}>
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