import styled from "styled-components";
import {BACKGROUND_COLOR_HEADER,  WHITE_COLOR_HEADER, BACKGROUND_COLOR_HEADER_EL, MAIN_YELLOW_COLOR} from '../../../../../constants/colors'

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  grid-column: 1/-1;
  background-color: ${BACKGROUND_COLOR_HEADER};
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 3fr 2fr;
  }
`;

const Logo = styled.img`
  height: 60px;
  margin: 0 auto;
`;

const UserInfo = styled.div`
  grid-column: 3/-1;
  text-align: right;
  padding: 7px 30px;
  margin-left: 20px;
  vertical-align: middle;
  color: ${WHITE_COLOR_HEADER};
`;

const ButtonExit = styled.button`
  display: inline-block;
  cursor: pointer;
  outline: none;
  height: 43px;
  width: 43px;
  border-radius: 50%;
  background-color: ${BACKGROUND_COLOR_HEADER_EL};
  border: none;
  transition-property: background-color, border, color;
  transition-duration: 0.7s;
  transition-timing-function: ease;
  &:hover {
    background-color: inherit;
    border: 1px solid ${MAIN_YELLOW_COLOR};
    color: ${MAIN_YELLOW_COLOR};
  }
`;

export { HeaderWrapper, Logo, UserInfo, ButtonExit};
