import React from 'react'
import styled from 'styled-components'

const GameScore = ({ score }) => {
  return (
    <ScoreWrapper>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreWrapper>
  )
}

export default GameScore

const ScoreWrapper = styled.div`
 
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 5px 10px;
 h1{
      font-size: 45px;
      font-weight: 500;
      margin: 0;
 }
 p{
      font-size: 20px;
      font-weight: 300;
      text-align: center;
 }
`
