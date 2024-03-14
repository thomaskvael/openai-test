"use client";

import { ChatWrapper } from "./components/ChatWrapper";
import { Search } from "./components/Search";
import { useChat } from "ai/react";

export const TestAI = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/ai/search",
  });

  return (
    <>
      <ChatWrapper>
        <Search
          handleSearchTextChange={handleInputChange}
          onFormSubmit={handleSubmit}
          searchInput={input}
        ></Search>
        <ul>
          {messages.map((m, index) => (
            <li key={index}>
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </li>
          ))}
        </ul>
      </ChatWrapper>
    </>
  );
};
