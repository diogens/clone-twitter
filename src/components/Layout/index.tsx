import React from "react";

import { Container, Wrapper } from "./styled";

import MenuBar from "../MenuBar";
import Main from "../Main";
import SideBar from "../SideBar";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
