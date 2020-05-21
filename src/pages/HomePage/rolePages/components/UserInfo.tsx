import React, { FC } from "react";
import _ from "lodash";
import Carousel from "react-elastic-carousel";

import {
  InfoWrapper,
  Info,
  ProfileWrapper,
  InfoTittle,
} from "./styles/UserInfoStyle";

//CHANGE ANY. DON'T FORGET, NASTYA
const UserInfo: FC<{ profile: Array<{ rus: string; info: string }> }> = (
  profile
) => {
  const showProfile = profile.profile.map((el) => {
    return (
      <React.Fragment key={el.rus}>
        <InfoTittle>{`${el.rus}:`}</InfoTittle>
        <Info>{el.info}</Info>
      </React.Fragment>
    );
  });

  return (
    <ProfileWrapper>
      <InfoWrapper>{showProfile}</InfoWrapper>
      <Carousel>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Carousel>
    </ProfileWrapper>
  );
};

export default UserInfo;
