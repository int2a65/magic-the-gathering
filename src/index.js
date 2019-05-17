import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import CardPage from './components/CardPage';
import { createGlobalStyle } from 'styled-components';
import { device } from "./utilities/devices";

const GlobalStyle = createGlobalStyle`
  body {
    @media ${device.laptop} {
      margin: 0 100px;
    }
    @media ${device.desktop} {
      margin: 0 150px;
    }
    @media ${device.tablet} {
      margin: 0 50px;
    }
    @media ${device.mobile} {
      margin: 0 14px;
    }

    background: #151a1f;
    color: #e1e1e1;
  }
`

class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle />
        <CardPage />
      </Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)