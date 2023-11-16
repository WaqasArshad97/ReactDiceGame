import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" alt="dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width:1180px;
  height:100vh;
  display:flex;
  align-items:center;
  margin:0 auto;
  .content {
    h1{
        font-size:72px;
        white-space:nowrap;
        margin:0 auto;
      }
  }
`;