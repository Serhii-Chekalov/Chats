import { useState, useEffect, useMemo } from "react";
import { List, Input, MessageItem, MessageWrap } from "./ChatView.styled";

export const ChatView = ({
  activeChat,
  messages = [],
  onMessageCreate,
} = {}) => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (!message) return;

    if (event.key === "Enter") {
      onMessageCreate(message);
      setMessage("");
    }
  };

  return (
    <>
      {/* <pre>{JSON.stringify(activeChat, null, 2)}</pre> */}
      <div>{activeChat.creator}</div>
      <List>
        {messages.map(({ creator, user }, index) => {
          return (
            <MessageWrap key={index} right={Boolean(user)}>
              <MessageItem>{creator || user}</MessageItem>
            </MessageWrap>
          );
        })}
      </List>
      <div>
        <Input
          placeholder="Type your message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};
