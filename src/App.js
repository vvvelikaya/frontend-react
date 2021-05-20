import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from './containers/Main'
import './assets/sass/app.scss'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className='wrapper'>
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App