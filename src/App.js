import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './components/Home/Home'
import Game from './components/Game/Game'
import Settings from './components/Home/Settings'

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

  changeQuantityOfSquares =(q) => {
    console.log('fired',q);
    
    this.setState({ quantityOfSquares: q })
  }

  render() {
    const { quantityOfSquares } = this.state;
    const GameProps = { quantityOfSquares };
    const SettingsProps = { quantityOfSquares, changeQuantityOfSquares: this.changeQuantityOfSquares };
    return (
      <Container>
        <Router basename={process.env.PUBLIC_URL}>
          <>
            <Switch>
              <Route exact path='/' component={(props) => <Home changeQuantityOfSquares={(q) => this.changeQuantityOfSquares(q)} {...props} />} />
              <Route path='/Game' component={(props) => <Game {...GameProps} {...props} />} />
              <Route path='/Settings' component={(props) => <Settings {...props} {...SettingsProps} />} />
              <Route component={() => (<div>404 Not found!</div>)} />
            </Switch>
          </>
        </Router>
      </Container>
    )
  }
}
