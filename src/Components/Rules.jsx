import {styled} from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game?</h2>
      <div>
        <p className='text'>1. Select any number</p>
        <p className='text'>2. Click on dice image</p>
        <p className='text'>3. After click on dice if selected number is equal to the dice number, you will get some points as dice number</p>
        <p className='text'>4. If you wrong guess, then dice number will be deducted from your current points</p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    background-color:#FBF1F1;
    padding:10px;
    max-width:800px;
    max-height:160px;
    margin-top:15px;
    margin-left:15px;
    h2{
        margin-left:30px;
        margin-block-start: 0em;
        margin-block-end: 0em;
    }
    .text{
        margin-left:30px;
        font-size:14px;
        margin-block-start: 0em;
        margin-block-end: 0em;
    }
`;
