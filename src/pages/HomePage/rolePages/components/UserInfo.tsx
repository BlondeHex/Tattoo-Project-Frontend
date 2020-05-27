import React, { FC } from "react";
import _ from "lodash";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  InfoWrapper,
  Info,
  ProfileWrapper,
  InfoTittle,
  ImgGallery,
  CarouselWrapper,
  ButtonWrapper,
} from "./styles/UserInfoStyle";

const UserInfo: FC<{
  profile: Array<{ rus: string; info: string }>;
  portfolio: Array<string>;
  delete: () => void;
}> = (props) => {
  const showProfile = props.profile.map((el) => {
    return (
      <React.Fragment key={el.rus}>
        <InfoTittle>{`${el.rus}:`}</InfoTittle>
        <Info>{el.info}</Info>
      </React.Fragment>
    );
  });

  const showPortfolio = props.portfolio.map((el, i) => {
    return <ImgGallery key={i} image={el} />;
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <ProfileWrapper>
      <InfoWrapper>{showProfile}</InfoWrapper>
      <CarouselWrapper>
        <Carousel responsive={responsive}>{showPortfolio}</Carousel>
      </CarouselWrapper>
      <ButtonWrapper>
        <button onClick={() => props.delete()}>Одобрить</button>
        <button onClick={() => props.delete()}>Отклонить</button>
      </ButtonWrapper>
    </ProfileWrapper>
  );
};

export default UserInfo;
