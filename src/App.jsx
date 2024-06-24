import React, { useState } from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import './App.css'
import GamePlayScreen from './components/GamePlayScreen'
const App = () => {
const [isGameStarted, setIsGamestarted] = useState(false)

const togglePlay = () =>{
  setIsGamestarted(!isGameStarted);
}
  return (
    <>
    {
      isGameStarted ? <GamePlayScreen /> : <StartGame toggle={togglePlay} />
    }
    </>
  )
}

export default App;
