import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from 'styled-components';
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [score,setScore] = useState(0);
  const [error,setError] = useState('');
  const [showRules,setShowRules] = useState(false);

  const genrateRandomNumber = (min , max)=>{
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () =>{
    if(!selectedNumber){
      setError('You have not select any number !');
      return;
    } 
    setError('')
    const randomNumber = genrateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);
    if(selectedNumber===randomNumber){
        setScore(prev => prev + randomNumber);
    }
    else{
      setScore(prev => prev - randomNumber);
    }
    setSelectedNumber(undefined);
  };
  const resetGame = ()=>{
    setCurrentDice(1);
    setError('');
    setSelectedNumber(undefined);
    setScore(0);
  };

const GameRules = ()=>{
  setShowRules((prev)=> !prev);
};

  return (
      <MainContainer>
        <div className="top-section">
          <TotalScore score={score}/>
          <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btn">  
          <OutlineButton onClick={resetGame} >Reset</OutlineButton>
          <Button onClick={GameRules}>{showRules ? 'Hide':'Show'} Rules</Button>
        </div>
        {showRules && <Rules/>}
      </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .btn{
    margin-top:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:5px;
  }
  .top-section{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

`;