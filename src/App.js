import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components'
import {CookiesProvider} from 'react-cookie'


import Home from './components/Home'


const Body = styled.div`
 min-height: 100vh;
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Body>
          <Router>
            <Route path='/' component={Home} />
          </Router>
        </Body>
      </CookiesProvider>
    );
  }
}

export default App;
