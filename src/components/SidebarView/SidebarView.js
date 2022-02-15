import { useState, useEffect } from "react";
import {
  Header,
  Input,
  Head,
  Button,
  List,
  ListItem,
} from "./SidebarView.styled";

export const SidebarView = ({ chats = [], onChatChange, onSearch } = {}) => {
  return (
    <div>
      <Header>Search chat</Header>

      <Input
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Serch or start new chat"
        type="text"
      />
      <Head>Chats</Head>
      <List>
        {chats.map(({ id, creator, user, message }) => {
          return (
            <ListItem key={id}>
              <Button onClick={() => onChatChange(id)}>
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
