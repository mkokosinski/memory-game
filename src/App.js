import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Home'
import Game from './components/Game'

const Container = styled.div`
  align-items: center;
  background-color: #E0E0E0;
  display:flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

export const SettingsCtx = React.createContext(16);

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantityOfSquares: 16
    }
  }

  changeQuantityOfSquares(q) {
    this.setState({ quantityOfSquares: q })
  }

  render() {
    const { quantityOfSquares,changeQuantityOfSquares } = this.state;
    const GameProps = {quantityOfSquares};
    return (
      <SettingsCtx.Provider value={{quantityOfSquares}}>
        <Container>
          <Router>
            <>
              <Route exact path='/' component={(props) => <Home changeQuantityOfSquares={(q) => this.changeQuantityOfSquares(q)} {...props} /> } />
              <Route path='/Game' component={(props) => <Game {...GameProps} {...props} />} />
            </>
          </Router>
        </Container>
      </SettingsCtx.Provider>
    )
  }
}
