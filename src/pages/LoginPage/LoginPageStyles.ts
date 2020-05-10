import styled from "styled-components";
import {
  BACKGROUND_COLOR_BASE,
  GREY_COLOR_FORM,
  WHITE_COLOR_FORM,
  MAIN_YELLOW_COLOR,
} from "../../constants/colors";

const LoginPage = styled.div`
  background: ${BACKGROUND_COLOR_BASE};
  padding: 0 3%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 768px) {
    box-sizing: border-box;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    padding: 5% 3%;
  }
`;

const Logo = styled.img`
  margin: auto;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: -25%;
    left: 0;
    height: 150%;
    border: 1px solid #7b7c891c;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const InputFormWrapper = styled.div`
  position: relative;
  font-family: "Jost", sans-serif;

  & input {
    outline: none;
    position: relative;
    z-index: 1;
    height: 55px;
    width: 30vw;
    margin: 20px 0;
    color: ${WHITE_COLOR_FORM};
    background-color: inherit;
    border: 1px solid ${GREY_COLOR_FORM};
    border-radius: 7px;
    text-indent: 15px;
    font-size: 15px;
    transition-property: border;
    transition-duration: 0.2s;
    transition-timing-function: ease;

    &:hover,
    &:focus {
      border: 1px solid ${MAIN_YELLOW_COLOR};
    }
    &:focus ~ label {
      top: 1px;
      color: ${MAIN_YELLOW_COLOR};
    }

    @media (max-width: 768px) {
      height: 50px;
      width: 60vw;
    }
  }

  & label {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 10px;
    right: 0;
    transform: translateY(-50%);
    color: ${GREY_COLOR_FORM};
    transition-property: color, top;
    transition-duration: 0.7s;
    transition-timing-function: ease;
  }
`;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  margin: 35px 0;
  height: 60px;
  width: 30vw;
  color: ${MAIN_YELLOW_COLOR};
  background-color: inherit;
  border: 2px solid #eec36c;
  border-radius: 7px;
  font-size: 17px;
  transition-property: color, background-color;
  transition-duration: 0.8s;
  transition-timing-function: ease;

  &:hover {
    background-color: ${MAIN_YELLOW_COLOR};
    color: inherit;
  }
  @media (max-width: 768px) {
    height: 55px;
    width: 60vw;
  }
`;

export { LoginPage, Button, FormWrapper, Logo, InputFormWrapper };
