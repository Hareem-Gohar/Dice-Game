import styled from 'styled-components'
import GameScore from './GameScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'

const GamePlayScreen = () => {
  const [score, setScore] = useState(0);
  const [clickedBtn, setClickedBtn] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);

    if(clickedBtn === randomNumber){
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <Container>
      <main className='flex justify-between items-start gap-10 w-full'>
        <GameScore score={score} />
        <NumberSelector setClickedBtn={setClickedBtn} clickedBtn={clickedBtn} />
      </main>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
    </Container>
  )
}

export default GamePlayScreen

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  gap: 30px;
  padding: 30px 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
