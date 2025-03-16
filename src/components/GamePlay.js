import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button } from './styled/Button'
import Rules from './Rules'

function GamePlay() {
  const [score, setScore] = useState(0)
  const [state, setState] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const [showRules, setShowRules] = useState(false);

  


  const generateRandomNumber = (min, max) => {
      console.log(Math.floor(Math.random()*(max-min) + min));
      return Math.floor(Math.random()*(max-min) + min) ;
  }

  const rollDice = () => {


      if(!state){
        setError("You have not selected any number");
        return ;
      }
      setError("");
      const randomNumber = generateRandomNumber(1,7);
      setCurrentDice((prev) => randomNumber);

      if(state == randomNumber){
        setScore((prev) => prev + randomNumber)
      }
      else{
        setScore((prev) => prev - 1)
      }
      setState(undefined)
  }

  const resetScore = () => {
    setScore(0);
  }


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector state={state} setState={setState} error={error} setError={setError}/>
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="btns">
        <Button className='btn1' onClick={resetScore}>Reset</Button>
        <Button className='btn2' onClick={() => {setShowRules((prev) => !prev)}}>{showRules ? "Hide" : "Show"}</Button>
        {showRules && <Rules/>}
      </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  .top_section {
    display : flex;
    justify-content : space-between;
    align-items : end;
    margin : 20px;
  }

  .btns{
    margin-top : 10px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    gap: 15px;
  }
  .btns .btn1{
    background-color : white;
    color : black;
    border : 1px solid gray;
  }
  .btns .btn1:hover{
    background-color : black;
    color : white;
  }

  .btns .btn2{
    background-color : black;
    color : white;
    border : 1px solid gray;
  }
  .btns .btn2:hover{
    background-color : white;
    color : black;
  }


`