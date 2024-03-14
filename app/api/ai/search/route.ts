import { openai } from "@/src/config/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

//export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  console.log("Messages: ", messages);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
