"use client";

import { ChatPost } from "./ChatPost";

export const ChatWrapper = (props: React.PropsWithChildren) => {
  return (
    <div
      className="right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-full overflow-hidden"
      style={{ height: "calc(100dvh - 12rem)" }}
    >
      <div className="flex flex-col space-y-1.5 pb-6">
        <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
        <p className="text-sm text-[#6b7280] leading-3">
          Powered by Hjemmesnekra Solutions
        </p>
      </div>
      {props.children}
      <div className="overflow-auto h-full">
        <div className="p-6">
          <ChatPost type="User" message="Hi, how are you?" />
          <ChatPost
            type="AI"
            message="I'm doing well, thank you. How can I assist you today?"
          />
          <ChatPost type="User" message="Can you tell me a joke?" />
          <ChatPost
            type="AI"
            message="Sure, here's one: Why did the tomato turn red? Because it saw the salad dressing!"
          />
          <ChatPost
            type="User"
            message="Haha, that's funny. Can you tell me another one?"
          />
          <ChatPost
            type="AI"
            message="Of course! What do you call a fake noodle? An impasta!"
          />
          <ChatPost
            type="User"
            message="That's hilarious. Thanks for making me laugh."
          />
          <ChatPost
            type="AI"
            message="You're welcome. Is there anything else I can help you with?"
          />
          <ChatPost
            type="User"
            message="No, that's all for now. Thanks again!"
          />
          <ChatPost type="AI" message="No problem. Have a great day!" />
          <ChatPost
            type="User"
            message="Wait! Can I ask you one more question?"
          />
          <ChatPost type="AI" message="No! Good night!" />
        </div>
      </div>
    </div>
  );
};
