import { useState, useEffect } from "react";
import {
  Header,
  Input,
  Head,
  Button,
  List,
  ListItem,
  HeaderWrap,
  Name,
  Message,
} from "./SidebarView.styled";

export const SidebarView = ({ chats = [], onChatChange, onSearch } = {}) => {
  return (
    <div>
      <HeaderWrap>
        <Header>Sergii</Header>;
        <Input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Serch or start new chat"
          type="text"
        />
      </HeaderWrap>
      <Head>Chats</Head>
      <List>
        {chats.map(({ id, user, message }) => {
          return (
            <ListItem key={id}>
              <Button onClick={() => onChatChange(id)}>
                <Name>{user}</Name>
                <Message>{message}</Message>
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
