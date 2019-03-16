import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './components/Home/Home'
import Game from './components/Game/Game'
<<<<<<< HEAD
import Settings from './components/Home/Settings'
import Lang from './components/Languages'
import {LanguageContext} from './components/Context'
=======
import SettingsView from './components/Home/Settings'
import { withCookies } from 'react-cookie';
>>>>>>> 5afbe8c15488350c4033c73c108624cc22d7a5e2

const Container = styled.div`
  align-items: center;
  background-color: #E0E0E0;
  display:flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

<<<<<<< HEAD
const quantityOfSquares = [16,36];
=======
>>>>>>> 5afbe8c15488350c4033c73c108624cc22d7a5e2

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
      settings: {
        difficulty: {label: Lang['Polski'].difficulty.easy, value: 0},
        quantityOfSquares:quantityOfSquares[0],
        language: { label: Lang['Polski'].lang.polish, value: 1, dictionary: Lang['Polski'] }
=======
      Settings: {
        quantityOfSquares: 16
>>>>>>> 5afbe8c15488350c4033c73c108624cc22d7a5e2
      }
    }
  }

<<<<<<< HEAD
  handleChangeSettings = (sett) => {
    // const {value,name} = sett;
    // this.setState({settings:{...this.state.settings, [name]: value}})
    console.log(sett);
    
    const lang = Lang[sett.language.label];
    this.setState({ settings: {
      difficulty: { 
        label: Object.values(lang.difficulty)[sett.difficulty.value],
        value: sett.difficulty.value 
        },
        quantityOfSquares:quantityOfSquares[sett.difficulty.value],
        language: { 
          label: sett.language.label,
           value: sett.language.value, 
           dictionary: lang
          }
    } })
  }

  render() {
    const { settings } = this.state;
    const GameProps = { settings };
    const SettingsProps = { settings, changeSettings: this.handleChangeSettings };
=======
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
>>>>>>> 5afbe8c15488350c4033c73c108624cc22d7a5e2
    return (
      <LanguageContext.Provider value={settings.language.dictionary}>
        <Container>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
<<<<<<< HEAD
              <Route exact path='/' component={(props) => <Home changeQuantityOfSquares={(sett) => this.handleChangeSettings(sett)} {...props} />} />
=======
              <Route exact path='/' component={(props) => <Home changeQuantityOfSquares={(s) => this.changeSettingsHandler(s)} {...props} />} />
>>>>>>> 5afbe8c15488350c4033c73c108624cc22d7a5e2
              <Route path='/Game' component={(props) => <Game {...GameProps} {...props} />} />
              <Route path='/Settings' component={(props) => <SettingsView {...props} {...SettingsProps} />} />
              <Route component={() => (<div>404 Not found!</div>)} />
            </Switch>
          </Router>
        </Container>
      </LanguageContext.Provider>
    )
  }
}

export default withCookies(App);