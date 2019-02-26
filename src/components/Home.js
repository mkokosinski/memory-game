import React, { Component } from 'react'
import styled from 'styled-components'

import Game from './Game'
import StartGamePanel from './StartGamePanel';

const Container = styled.div`
min-height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`

const GamePanel = styled.div`
  display: none;
`

export default class Home extends Component {
  render() {
    return (
      <Container>
        <GamePanel>
          <StartGamePanel />
        </GamePanel>
        <Game />
      </Container>
    )
  }
}
