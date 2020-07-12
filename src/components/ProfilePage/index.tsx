import React from "react";

import Feed from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from "./styled";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined> Editar perfil</EditButton>
        <h1>Diogenes</h1>
        <h2>@Diogenes_oliveira</h2>

        <p>
          Developer at <a href="http://google.com">@HeroBlade</a>
        </p>

        <ul>
          <li>
            <LocationIcon /> Bahia, Brasil
          </li>
          <li>
            <CakeIcon /> Nascido(a) em 18 de março de 1088
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>244</strong>
          </span>
          <span>
            <strong>500</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
