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
const Board = styled.div`
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
const initSquares = [
  { id: 0, content: 'Q', turned: false, matched: false },
  { id: 1, content: 'W', turned: false, matched: false },
  { id: 2, content: 'E', turned: false, matched: false },
  { id: 3, content: 'R', turned: false, matched: false },
  { id: 4, content: 'E', turned: false, matched: false },
  { id: 5, content: 'R', turned: false, matched: false },
  { id: 6, content: 'W', turned: false, matched: false },
  { id: 7, content: 'Q', turned: false, matched: false },
]

const initState = {
  squares: [...initSquares],
  activeSquare: {},
  turnCounter: 0,
  gameIsEnd: false
}


class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      squares: props.cookies.get('squares') || [...initSquares],
      activeSquare: props.cookies.get('activeSquare') || {},
      turnCounter: parseInt(props.cookies.get('turnCounter')) || 0,
      gameIsEnd: false
    }
  }

  onTurn(sq) {
    const { squares, activeSquare, turnCounter } = this.state;
    let test = this.state.squares.filter(el => el.matched === false && el.turned === true).length;
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
    console.log('state', this.state.squares);
    console.log('initState', initState.squares);
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
    this.props.cookies.remove('squares');
    this.props.cookies.remove('turnCounter');
    this.props.cookies.remove('activeSquare');
    this.props.cookies.remove('gameIsEnd');
    this.setState({ ...JSON.parse(JSON.stringify(initState)) });
  }

  render() {
    const { turnCounter, gameIsEnd } = this.state;
    return (
      <GameContainer>
        <div>
          {gameIsEnd ? `Gra zakończona! Twój wynik to: ${turnCounter}` : `Ilość tur:  ${turnCounter}`}
        </div>
        <Board>
          {this.state.squares.map(
            sq => <Square {...sq} key={sq.id} onTurn={() => this.onTurn(sq.id)} />
          )}
        </Board>
        <Button onClick={() => this.resetGame()}>
          Reset
        </Button>
      </GameContainer>
    )
  }
}

export default withCookies(Game);