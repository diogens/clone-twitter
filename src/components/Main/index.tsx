import React from "react";

import ProfilePage from "../ProfilePage";

import {
  Container,
  BackIcon,
  Header,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styled";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Diogeness Oliveira</strong>
          <span>992 Tweetss</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
