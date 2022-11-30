import React from 'react'
import HomeContainer from './containers/HomeContainers'
import HeaderContainers from './containers/HeaderContainers'

import './App.css'
const App = () => {
  return (
    <div className="App">
      <HeaderContainers />
     <HomeContainer />
    </div>
  )
}

export default App

