import React, { Component } from 'react'
import styled from 'styled-components'

import Square from './Square';

const Board = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
`

export default class Game extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         squares : [
             {id: 0, content: 'Q', turned: false, matched: false},
             {id: 1, content: 'W', turned: false, matched: false},
             {id: 2, content: 'E', turned: false, matched: false},
             {id: 3, content: 'R', turned: false, matched: false},
             {id: 4, content: 'E', turned: false, matched: false},
             {id: 5, content: 'R', turned: false, matched: false},
             {id: 6, content: 'W', turned: false, matched: false},
             {id: 7, content: 'Q', turned: false, matched: false},
         ],
         activeSquare:{},
         clickCounter: 0
      }
    }

onTurn(sq){
  const {squares, clickCounter,activeSquare} = this.state;
  if (clickCounter < 2) {
    const newSquares = squares.slice();
    const currentSquare = newSquares[sq];
    currentSquare.turned = !currentSquare.turned;
    
    if (currentSquare.content === activeSquare.content) {
      this.setState({clickCounter:0})
      currentSquare.matched = true;
      newSquares[activeSquare.id].matched = true;
    }

    this.setState({
      squares: newSquares,
      activeSquare: {...currentSquare},
      clickCounter:clickCounter+1
    })
  }
  
  if (clickCounter === 1) {
    setTimeout(()=>this.resetUnmatched(),500);
  }
}

resetUnmatched(){
  const newSquares = this.state.squares.slice();
    newSquares.forEach(elem=>elem.matched === false ? elem.turned = false : elem.turned )
    this.setState({clickCounter:0, activeSquare: {}})
}
    
  render() {
    return (
      <Board>
        {this.state.clickCounter}
        {this.state.squares.map(
            sq => <Square {...sq} key={sq.id} onTurn={() => this.onTurn(sq.id)} />
        ) }
      </Board>
    )
  }
}
