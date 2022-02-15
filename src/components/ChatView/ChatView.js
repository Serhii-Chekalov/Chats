import { useState, useEffect, useMemo } from "react";
import {
  Name,
  List,
  Input,
  MessageItem,
  MessageWrap,
  ChatWrap,
  NameWrap,
  InputWrap,
} from "./ChatView.styled";

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
      <NameWrap>
        <Name>{activeChat.user}</Name>
      </NameWrap>
      <ChatWrap>
        <List>
          {messages.map(({ creator, user }, index) => {
            return (
              <MessageWrap key={index} right={Boolean(user)}>
                <MessageItem>{creator || user}</MessageItem>
              </MessageWrap>
            );
          })}
        </List>
      </ChatWrap>
      <InputWrap>
        <Input
          placeholder="Type your message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </InputWrap>
    </>
  );
};
