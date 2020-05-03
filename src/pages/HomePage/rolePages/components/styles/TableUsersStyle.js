import styled, {keyframes} from "styled-components";
import {BACKGROUND_COLOR_MAIN, BACKGROUND_COLOR_USERLIST, WHITE_COLOR_USERLIST, MAIN_YELLOW_COLOR, MAIN_WHITE_COLOR} from '../../../../../constants/colors'


const ContainerListUsers = styled.main`
  margin: 15px 20px;
  padding: 20px 5%;
  max-height: 100vh;
  background-color: ${BACKGROUND_COLOR_MAIN};
  border-radius: 10px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;


const WrapperFind = styled.div`
  text-align: left;
  height: 80px;
  width:100%;
`;

const Tittle = styled.span`
  color: ${MAIN_WHITE_COLOR};
  font-family: sans-serif;
  vertical-align: top;
  font-size: 33px;
  font-weight: 200;
`;

const InputFind = styled.input`
  outline: none;
  text-align: left;
  font-size: 15px;
  background-color: inherit;
  color: ${MAIN_WHITE_COLOR};
  border: none;
  border-bottom: 1px solid ${MAIN_WHITE_COLOR};
  height: 40px;
  width: 30vw;
  margin: 10px 2vw 0 10vw ;
  vertical-align: bottom;
`;

const borderAnimation = keyframes`
  0% {
    color: ${MAIN_YELLOW_COLOR};
    border-color: ${MAIN_YELLOW_COLOR};
  }
  50% {
    color: ${MAIN_WHITE_COLOR};
    border-color: ${MAIN_WHITE_COLOR};
  }
  100% {
    color: ${MAIN_YELLOW_COLOR};
    border-color: ${MAIN_YELLOW_COLOR};
  }

`;

const ButtonFind = styled.button`
  outline: none;
  cursor: pointer;
  vertical-align: bottom;
  font-size: 13px;
  height: 35px;
  width: 100px;
  color: ${MAIN_YELLOW_COLOR};
  background-color: inherit;
  border: 1px solid ${MAIN_YELLOW_COLOR};
  border-radius: 20px;
  transition-property: transform;
  transition-duration: 0.7s;
  transition-timing-function: ease;
  &:hover {
    animation-name: ${borderAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: forward;
  }
`;



const Table = styled.table`
width: 100%;
border-spacing: 0 1em;
  & tr {
    color: ${WHITE_COLOR_USERLIST};
    background-color: ${BACKGROUND_COLOR_USERLIST};
    border-radius: 20px;
    text-align: center;

    & td {
      height: 50px;
      font-size: 16px;
      padding: 0 30px;
      &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align: right;
      }
    }
  };
`;

const Icone = styled.img`
  height: 40px;
  vertical-align: middle;
`;

const BtnDisconnect = styled.button`
  outline: none;
  color: black;
  background-color: ${MAIN_YELLOW_COLOR};
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 80px;
  vertical-align: middle;
  transition-property: transform, background-color;
  transition-duration: 0.7s;
  transition-timing-function: ease;
  &:hover:enabled{  
    cursor: pointer;
    transform: scale(0.92,0.92);
  }
  &:disabled{
    background-color: transparent;
    border: 1px solid ${MAIN_YELLOW_COLOR};
  }
`;

const BtnDelete = styled.button`
  outline: none;
  cursor: pointer;
  background-color: inherit;
  margin-left: 20%;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: ${WHITE_COLOR_USERLIST};
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease;
  &:hover{
    transform: rotate(360deg);
  }
  @media (max-width: 1024px) {
    margin-left: 30px;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;



export {ContainerListUsers, InputFind, ButtonFind, WrapperFind, Table, Icone, BtnDisconnect, BtnDelete, Tittle };
