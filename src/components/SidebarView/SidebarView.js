import { useState, useEffect } from "react";

import { Head } from "./SidebarView.styled";

// chat -> ID, creator, user
// messages -> ID []<messages>

export const SidebarView = ({ chats = [], onChatChange } = {}) => {
  return (
    <div>
      <header>Header</header>
      <Head>Chats</Head>
      <ul>
        {chats.map(({ id, creator, user }) => {
          return (
            <li key={id}>
              <button onClick={() => onChatChange(id)}>{user}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
