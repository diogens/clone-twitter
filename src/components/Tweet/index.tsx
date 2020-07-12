import React from "react";
import {
  Container,
  Retweeted,
  HeroBladeIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styled";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <HeroBladeIcon />
        vocè retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>HeroBlade</strong>
            <span>@heroblade</span>
            <Dot />
            <time>12 de jul</time>
          </Header>

          <Description>Espada não tem ...</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              44
            </Status>

            <Status>
              <RetweetIcon />
              24
            </Status>

            <Status>
              <LikeIcon />
              333
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
