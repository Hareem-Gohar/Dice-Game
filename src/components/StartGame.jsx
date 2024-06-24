import React from 'react'
import styled from 'styled-components'
import Button from './Button'
const StartGame = ({ toggle }) => {
  return (
    <Container className='md:flex-row flex-col-reverse items-center justify-center md:justify-between'>
      <div className="dice-img w-full md:w-[50%]">
            <img className='w-full' src="/images/dice.png" alt="" srcset="" />
      </div>
      <div className="game-start text-center w-full md:w-[45%]">
            <h1 className='text-7xl font-bold mb-5'>DICE GAME</h1>
            <Button toggle={toggle} text='Play Now' />
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1280px;
width:100%;
gap:30px;
padding: 30px 20px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`