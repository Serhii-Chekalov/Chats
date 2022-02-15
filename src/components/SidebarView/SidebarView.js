import { useState, useEffect } from "react";
import { Header, Head, Button, List, ListItem } from "./SidebarView.styled";

// chat -> ID, creator, user
// messages -> ID []<messages>

export const SidebarView = ({ chats = [], onChatChange, onSearch } = {}) => {
  return (
    <div>
      <Header>Header</Header>

      <input onChange={(e) => onSearch(e.target.value)} type="text" />
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
