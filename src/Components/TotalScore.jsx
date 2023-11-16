import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1 className={score< 0 ? 'lessScore' : 'greaterScore'}>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  height:140px;
  .lessScore{
    color:red;
    text-align:center;
    font-size: 60px;
    line-height: 100px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .greaterScore{
    color:black;
    text-align:center;
    font-size: 60px;
    line-height: 100px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;
