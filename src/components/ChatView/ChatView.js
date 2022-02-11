import { useState, useEffect, useMemo } from "react";

export const ChatView = ({ active, messages = [], onMessageCreate } = {}) => {
  const [message, setMessage] = useState("");

  const currectMessages = useMemo(
    () => messages[active] ?? [],
    [active, messages]
  );

  const handleKeyDown = (event) => {
    if (!message) return;

    if (event.key === "Enter") {
      onMessageCreate(message);
      setMessage("");
    }
  };

  return (
    <>
      <ul style={{ padding: "0px 40px" }}>
        {currectMessages.map(({ creator, user }, index) => {
          return (
            <li key={index} style={{ textAlign: creator ?? "right" }}>
              <p>{creator || user}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};
