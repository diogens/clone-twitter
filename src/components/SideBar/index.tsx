import React from "react";

import List from "../List";
import News from "../News";
import FollowSuggestion from "../FollowSuggestion";

import {
  Container,
  SearchWraper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styled";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWraper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWraper>
      kkkk
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Rhalyny Sydy" nickname="@sydy" />,
            <FollowSuggestion name="Rhalyny Sydy" nickname="@sydy" />,
            <FollowSuggestion name="Rhalyny Sydy" nickname="@sydy" />,
            <FollowSuggestion name="Rhalyny Sydy" nickname="@sydy" />,
          ]}
        />
        <List
          title="O que está acontencendo"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
