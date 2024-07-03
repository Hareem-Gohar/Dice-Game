import styled from "styled-components";
import GameScore from "./GameScore";
import NumberSelector from "./NumberSelector";
import Button from "./Button";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlayScreen = () => {
  const [score, setScore] = useState(0);
  const [clickedBtn, setClickedBtn] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [rules, setRules] = useState(false);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const rollDice = () => {
    if (!clickedBtn) {
      setError("Please select a number to roll dice");
      return;
    }
    setError(" ");
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);

    if (clickedBtn === randomNumber) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }
    setClickedBtn(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const showRules = () => {
    setRules(!rules);
  };

  return (
    <Container>
      <main className="flex justify-between items-start gap-10 w-full">
        <GameScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          setClickedBtn={setClickedBtn}
          clickedBtn={clickedBtn}
        />
      </main>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <Button
          toggle={resetScore}
          text="Reset Score"
          bg="white"
          color="black"
        />
        <Button toggle={showRules} text="Show Rules" bg="black" color="white" />
      </div>
      {rules && <Rules />}
    </Container>
  );
};

export default GamePlayScreen;

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  gap: 30px;
  padding: 30px 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
