import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './components/Home/Home'
import Game from './components/Game/Game'
import SettingsView from './components/Home/Settings'
import { withCookies } from 'react-cookie';

const Container = styled.div`
  align-items: center;
  background-color: #E0E0E0;
  display:flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Settings: {
        quantityOfSquares: 16
      }
    }
  }

  changeSettingsHandler = (newSettings) => {
    const { cookies } = this.props;
    cookies.remove('gameStarted');
    cookies.remove('squares');
    cookies.remove('turnCounter');
    cookies.remove('activeSquare');
    cookies.remove('gameIsEnd');
    this.setState({ Settings: newSettings })
  }

  render() {
    const { Settings } = this.state;
    const GameProps = { Settings };
    const SettingsProps = { Settings, changeSettingsHandler: this.changeSettingsHandler };
    return (
      <Container>
        <Router basename={process.env.PUBLIC_URL}>
          <>
            <Switch>
              <Route exact path='/' component={(props) => <Home changeQuantityOfSquares={(s) => this.changeSettingsHandler(s)} {...props} />} />
              <Route path='/Game' component={(props) => <Game {...GameProps} {...props} />} />
              <Route path='/Settings' component={(props) => <SettingsView {...props} {...SettingsProps} />} />
              <Route component={() => (<div>404 Not found!</div>)} />
            </Switch>
          </>
        </Router>
      </Container>
    )
  }
}

export default withCookies(App);