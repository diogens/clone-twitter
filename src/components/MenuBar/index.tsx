import React from "react";

import Button from "../Button";

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ExitIcon,
  BotSide,
  Avatar,
  ProfileDate,
} from "./styled";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Menssagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>
      <BotSide>
        <Avatar />
        <ProfileDate>
          <strong>DIogenes Oliveira</strong>
          <span>@diogenes_oliveira</span>
        </ProfileDate>
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
