import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Own components
import { LanguageContext } from './components/Context'
import Home from './components/Home/Home'
import Game from './components/Game/Game'
import Languages from './components/Languages'
import Settings from './components/Settings/Settings'
import SettingsToast from './components/Toasts/SettingToasts'

const possibleNumberOfTiles = [16, 36],
      POLISH = 'Polski',
      PUBLIC_URL = process.env.PUBLIC_URL,
      DEFAULT_OPTIONS = {
        difficulty: { label: Languages[POLISH].difficulty.easy, value: 0 },
        numberOfTiles: possibleNumberOfTiles[0],
        language: { label: Languages[POLISH].lang.polish, value: 1, dictionary: Languages[POLISH] }
      }

const Container = styled.div`
  align-items: center;
  background-color: #E0E0E0;
  display:flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: DEFAULT_OPTIONS
    }
  }

  handleChangeSettings = (newSettings) => {
    const lang = Languages[newSettings.language.label];
    this.setState({
      settings: {
        difficulty: {
          label: Object.values(lang.difficulty)[newSettings.difficulty.value],
          value: newSettings.difficulty.value
        },
        numberOfTiles: possibleNumberOfTiles[newSettings.difficulty.value],
        language: {
          label: newSettings.language.label,
          value: newSettings.language.value,
          dictionary: lang
        }
      },
      settingsToastIsOpen: false
    },
      () => console.log('vallback', this.state)
    )
  }

  // }) 
  showSettingsToast = () => {
    this.setState({
      settingsToastIsOpen: true
    })
  }
  hideSettingsToast = () => {
    this.setState({
      settingsToastIsOpen: false
    })
  }

  openSettingsToast = () => {
    this.showSettingsToast();
    setTimeout(() => {
      this.hideSettingsToast();
    }, 3000)
  }

  render() {
    const { settings, settingsToastIsOpen } = this.state;
    const lang = settings.language.dictionary;
    const SettingsProps = { changeSettings: this.handleChangeSettings, openToast: this.openSettingsToast };
    return (
      <LanguageContext.Provider value={settings}>
        <Container>
          <Router basename={PUBLIC_URL}>
            <Switch>
              <Route exact path='/' component={(props) => <Home changeNumberOfTiles={(sett) => this.handleChangeSettings(sett)} {...props} />} />
              <Route path='/Game' component={(props) => <Game  {...props} />} />
              <Route path='/Settings' component={(props) => <Settings {...props} {...SettingsProps} />} />
              <Route component={() => (<div>404 Not found!</div>)} />
            </Switch>
          </Router>
        </Container>
        <SettingsToast isOpen={settingsToastIsOpen} message={lang.saveToastMessage} />

      </LanguageContext.Provider>
    )
  }
}
