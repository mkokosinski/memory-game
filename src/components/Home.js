import React, { Component } from 'react'
import styled from 'styled-components'

import Game from './Game'

const Container = styled.div`
min-height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`

export default class Home extends Component {
  render() {
    return (
      <Container>
       <Game />
      </Container>
    )
  }
}
