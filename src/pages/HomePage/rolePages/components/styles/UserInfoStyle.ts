import styled from "styled-components";

import {
  BACKGROUND_COLOR_BASE,
  BACKGROUND_COLOR_NAV,
  MAIN_YELLOW_COLOR,
} from "../../../../../constants/colors";

const ProfileWrapper = styled.div`
  text-align: left;
`;
const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
const InfoTittle = styled.div`
  color: ${MAIN_YELLOW_COLOR};

  padding: 5px 0;
`;
const Info = styled.div`
  padding: 5px 0;
`;
const Carousel = styled.div``;
const ImgGallery = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  width: 200px;
  height: 200px;
`;

const CarouselWrapper = styled.div`
  padding: 15px 0;
  display: grid;
`;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 40px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  & button {
    background-color: inherit;
    color: ${MAIN_YELLOW_COLOR};
    font-size: 16px;
    border-radius: 2px;
    border: 1px solid ${MAIN_YELLOW_COLOR};
    margin: 0 10px;
    padding: 10px 30px;
  }
`;

export {
  InfoWrapper,
  ProfileWrapper,
  Info,
  Carousel,
  InfoTittle,
  ImgGallery,
  CarouselWrapper,
  ButtonWrapper,
};
