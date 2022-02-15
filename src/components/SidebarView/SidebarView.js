import { useState, useEffect } from "react";
import {
  Header,
  Image,
  Input,
  Head,
  Button,
  List,
  ListItem,
  HeaderWrap,
} from "./SidebarView.styled";

export const SidebarView = ({ chats = [], onChatChange, onSearch } = {}) => {
  return (
    <div>
    <HeaderWrap>
      <Header>Search chat</Header>
      <Input
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Serch or start new chat"
        type="text"
      />
      </HeaderWrap>
      <Head>Chats</Head>
      <List>
        {chats.map(({ id, creator, user, message, avatar }) => {
          return (
            <ListItem key={id}>
              <Button onClick={() => onChatChange(id)}>
                <Image src={avatar} alt="" />
                <span>{user}</span>
                <p>{message}</p>
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
