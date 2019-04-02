import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createGlobalStyle } from 'styled-components'
// import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Mitr');

body {
  margin: 0;
  padding: 0;
  font-family: 'Mitr', sans-serif;

  max-width: 100vw;
  background: #231d1d;
  display: flex;
  justify-content: center;
}
`

// const theme = {
//   primary: '#a04ed9'
// }

ReactDOM.render(
  // <ThemeProvider theme={theme}>
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  // </ThemeProvider>,
  document.getElementById('root')
)
