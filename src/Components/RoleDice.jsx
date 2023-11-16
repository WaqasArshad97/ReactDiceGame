import { styled } from "styled-components";

const RoleDice = ({currentDice,roleDice}) => {
  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt={`dice${currentDice}`} />
            <p>Click on Dice to roll</p>
        </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
    .errorSelect{
        position:absolute;
        left:200px;
    }
    img{
        height:200px;
        weight:200px;
        margin-right:15px;
    }
    /* margin-top:10px; */
    display:flex;
    justify-content:center;
    p{
        margin:0 auto;
        text-align:center;
        font-size:16px;
        font-weight:800px;
    }
    .dice{
        cursor:pointer;
        position:relative;
    }
`;