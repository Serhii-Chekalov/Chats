import { useState, useEffect, useMemo } from "react";
import { SidebarView } from "../SidebarView/SidebarView";
import { ChatView } from "../ChatView/ChatView";

// default data
import chatsData from "./default-chats.json";
import messagesData from "./default-messages.json";

// styles
import { ChatWrap, RootWrap, SidebarWrap } from "./RootView.styled";

export const RootView = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [activeChat, setActiveChat] = useState(1);
  const [messages, setMessages] = useState(
    localStorage.messages ? JSON.parse(localStorage.messages) : messagesData
  );
  const chats = useMemo(() => {
    return chatsData.map((i) => {
      const messagesById = messages[i.id];
      const lastMessage = messagesById[messagesById.length - 1];

      return {
        ...i,
        /** getting the last message */
        message: lastMessage?.creator || lastMessage?.user,
      };
    });
  }, [messages, searchPhrase]);

  const renderChats = useMemo(() => {
    return chats.filter((i) => {
      return i.user.toLowerCase().includes(searchPhrase.toLowerCase());
    });
  }, [chats]);

  const activeChatData = chats.find(({ id }) => id === activeChat);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

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
                lastUpdate: Date.now(),
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
          lastUpdate: Date.now(),
        },
      ],
    }));
    setTimeout(
      setFakeData,
      // set any renage, that u want 10 -> 15
      (Math.floor(Math.random() * 5) + 3) * 1000
    );
  };

  return (
    <RootWrap>
      <SidebarWrap>
        <SidebarView
          chats={renderChats}
          onChatChange={(id) => setActiveChat(id)}
          onSearch={setSearchPhrase}
        />
      </SidebarWrap>
      <ChatWrap>
        <ChatView
          activeChat={activeChatData}
          messages={messages[activeChat]}
          onMessageCreate={(message) => modifyMessages(message)}
        />
      </ChatWrap>
    </RootWrap>
  );
};
