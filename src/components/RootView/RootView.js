import { useState, useEffect } from "react";
import { SidebarView } from "../SidebarView/SidebarView";
import { ChatView } from "../ChatView/ChatView";

// default data
import chatsData from "./default-chats.json";
import messagesData from "./default-messages.json";

// styles
import { ChatWrap, RootWrap, SidebarWrap } from "./RootView.styled";

export const RootView = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [chats, setChats] = useState(chatsData);
  const [messages, setMessages] = useState(messagesData);

  const setFakeData = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then(
        (result) => {
          setMessages((messages) => ({
            ...messages,
            [activeChat]: [
              ...messages[activeChat],
              {
                user: result.value,
              },
            ],
          }));
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  const modifyMessages = (message) => {
    setMessages((messages) => ({
      ...messages,
      [activeChat]: [
        ...messages[activeChat],
        {
          creator: message,
        },
      ],
    }));
    setTimeout(
      setFakeData,
      // set any renage, that u want 10 -> 15
      (Math.floor(Math.random() * 3) + 1) * 1000
    );
  };

  return (
    <RootWrap>
      <SidebarWrap>
        <SidebarView chats={chats} onChatChange={(id) => setActiveChat(id)} />
      </SidebarWrap>
      <ChatWrap>
        <ChatView
          active={activeChat}
          messages={messages}
          onMessageCreate={(message) => modifyMessages(message)}
        />
      </ChatWrap>
    </RootWrap>
  );
};
