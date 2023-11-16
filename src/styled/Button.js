import { styled } from "styled-components";
export const Button = styled.button`
  background-color:black;
  color:white;
  width:200px;
  padding:10px;
  text-align:center;
  font-size:20px;
  border:2px solid transparent;
  border-radius:5px;
  transition:0.4s background ease-in;
  cursor:pointer;
  &:hover{
    background-color:transparent;
    border:2px solid black;
    color:black;
    transition:0.3s background ease-in;
  }
  &:hover{
        box-shadow: 2px 0 2px 0 rgba(0,0,0,0.24);
    }
`;
export const OutlineButton = styled(Button)`
  background-color:transparent;
  color:black;
  border:2px solid black;
  transition:0.4s background ease-in;
  cursor:pointer;
  &:hover{
    background-color:black;
    border:2px solid transparent;
    color:white;
    transition:0.3s background ease-in;
  }
  &:hover{
        box-shadow: 2px 0 2px 0 rgba(0,0,0,0.24);
    }
`;