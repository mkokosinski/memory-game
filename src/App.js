import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './components/Home/Home'
import Game from './components/Game/Game'
import Settings from './components/Settings/Settings'
import Lang from './components/Languages'
import {LanguageContext} from './components/Context'

const Container = styled.div`
  align-items: center;
  background-color: #E0E0E0;
  display:flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

const quantityOfTiles = [16,36];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {
        difficulty: {label: Lang['Polski'].difficulty.easy, value: 0},
        quantityOfTiles:quantityOfTiles[0],
        language: { label: Lang['Polski'].lang.polish, value: 1, dictionary: Lang['Polski'] }
      }
    }
  }

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
        quantityOfTiles:quantityOfTiles[sett.difficulty.value],
        language: { 
          label: sett.language.label,
           value: sett.language.value, 
           dictionary: lang
          }
    } })
  }

  render() {
    const { settings } = this.state;
    const SettingsProps = { changeSettings: this.handleChangeSettings };
    return (
      <LanguageContext.Provider value={settings}>
        <Container>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path='/' component={(props) => <Home changeQuantityOfTiles={(sett) => this.handleChangeSettings(sett)} {...props} />} />
              <Route path='/Game' component={(props) => <Game  {...props} />} />
              <Route path='/Settings' component={(props) => <Settings {...props} {...SettingsProps} />} />
              <Route component={() => (<div>404 Not found!</div>)} />
            </Switch>
          </Router>
        </Container>
      </LanguageContext.Provider>
    )
  }
}
