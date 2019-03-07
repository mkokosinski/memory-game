import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './components/Home'
import Game from './components/Game/Game'

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
    const { quantityOfSquares, changeQuantityOfSquares } = this.state;
    const GameProps = { quantityOfSquares };
    return (
      <Container>
        <Router basename={process.env.PUBLIC_URL}>
          <>
            {console.log(this.props)}
            <SettingsCtx.Provider value={{ quantityOfSquares }}>
              <Switch>
                <Route exact path='/' component={(props) => <Home changeQuantityOfSquares={(q) => this.changeQuantityOfSquares(q)} {...props} />} />
                <Route path='/Game' component={(props) => <Game {...GameProps} {...props} />} />
                <Route component={() => (<div>404 Not found 1</div>)} />
              </Switch>
            </SettingsCtx.Provider>
          </>
        </Router>
      </Container>
    )
  }
}
