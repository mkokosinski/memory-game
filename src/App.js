import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './components/Home/Home'
import Game from './components/Game/Game'
import Settings from './components/Settings/Settings'
import Lang from './components/Languages'
import { LanguageContext } from './components/Context'
import SettingsToast from './components/Toasts/SettingToasts'

const Container = styled.div`
  align-items: center;
  background-color: #E0E0E0;
  display:flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

const quantityOfTiles = [16, 36];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {
        difficulty: { label: Lang['Polski'].difficulty.easy, value: 0 },
        quantityOfTiles: quantityOfTiles[0],
        language: { label: Lang['Polski'].lang.polish, value: 1, dictionary: Lang['Polski'] }
      }
    }
  }

  handleChangeSettings =
    // new Promise((resolve, reject) =>{
    (sett) => {
      // const {value,name} = sett;
      // this.setState({settings:{...this.state.settings, [name]: value}})
      const lang = Lang[sett.language.label];
      const prevState =
        this.setState({
          settings: {
            difficulty: {
              label: Object.values(lang.difficulty)[sett.difficulty.value],
              value: sett.difficulty.value
            },
            quantityOfTiles: quantityOfTiles[sett.difficulty.value],
            language: {
              label: sett.language.label,
              value: sett.language.value,
              dictionary: lang
            }
          }, 
          showSettingsToast: false
        },
          () => console.log('vallback', this.state)
        )
    }

  // }) 
    toggleSettingsToast = (isOpen) => {
      this.setState({
        showSettingsToast: isOpen
      })
    }

    openSettingToast = () => {
    this.toggleSettingsToast(true);
    setTimeout(() => {
      this.toggleSettingsToast(false);
    }, 3000)
  }
  render() {
    const { settings, showSettingsToast } = this.state;
    const lang = settings.language.dictionary;
    const SettingsProps = { changeSettings: this.handleChangeSettings, openToast: this.openSettingToast };
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
        <SettingsToast isOpen={showSettingsToast} message={lang.saveToastMessage} />

      </LanguageContext.Provider>
    )
  }
}
