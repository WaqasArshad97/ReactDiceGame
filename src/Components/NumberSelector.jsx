import styled from 'styled-components';

const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {
    const arrayNumber=[1,2,3,4,5,6];
    const numberSelctorHandler = (value)=>{
        setSelectedNumber(value);
        setError('')
    }
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className="flex">
            {arrayNumber.map((value,i)=>(
            <Box 
                isSelected={value == selectedNumber}
                key={i} onClick = {()=>numberSelctorHandler(value)}>
                {value}
            </Box>))}
        </div>
        <p className='text'>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    .error{
        color:red;
        font-size:19px;
        font-weight:600px;
        text-align:end;
        margin:0 auto;
    }
    .flex{
        display:flex;
        gap:24px;
    }
    .text{
        font-size:20px;
        font-weight:600px;
        text-align:end;
        margin:0 auto;
    }
`;

const Box = styled.div`
    cursor:pointer;
    height:65px;
    width:65px;
    border:1px;
    font-size:40px;
    font-weight:800px;
    border:1px solid black;
    display:grid;
    text-align:center;
    align-items:center;
    background-color:${({isSelected})=>isSelected ? 'black':'white' };
    color:${({isSelected})=>!isSelected ? 'black':'white' };
    transition:0.3s background ease-in; 
    &:hover{
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.24);
    }
`;
