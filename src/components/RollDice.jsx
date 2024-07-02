import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  
  img {
    cursor: pointer;
  }
  
  p {
    font-size: 24px;
    margin-top: 10px;
  }
`;
