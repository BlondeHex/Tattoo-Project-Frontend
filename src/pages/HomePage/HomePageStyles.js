import styled from "styled-components";

import {BACKGROUND_COLOR_BASE, BACKGROUND_COLOR_NAV, MAIN_YELLOW_COLOR} from '../../constants/colors'

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 60px 1fr;
  background: ${BACKGROUND_COLOR_BASE};
  height: 100vh;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 5fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Menu = styled.nav`
  display: grid;
  grid-template-rows: 40px 40px 40px;
  grid-row-gap: 10px;
  padding: 20px 0 0 27%;
  
  background: ${BACKGROUND_COLOR_NAV};
  box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.03);

  & button {
    cursor:pointer;
    text-align: center;
    background-color: transparent;
    opacity:0.6;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;
    width:100%;
    font-size: 12px;
    transition-property: background-color, font-size, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;

    &:not(.active):hover {
      opacity:0.9;
      font-size:13px
    }

    &.active {
      opacity:1;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: ${MAIN_YELLOW_COLOR};
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    display:none;
  }
`;


export {HomeWrapper, Menu};
