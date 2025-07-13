import { env } from "@/env";
import { createOpenAI, openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

const openAi = createOpenAI({
  apiKey: env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log(messages);

  const result = streamText({
    model: openAi("meta-llama/llama-3.2-3b-instruct:free"),
    messages,
    system: `You are an expert HTML frontend developer assistant. 
    Your primary role is to help users rapidly prototype and build minimal,
    responsive landing pages by generating clean,
     production-grade HTML and CSS code within a single file`,
  });

  //   console.log(await result.text);

  return result.toDataStreamResponse();
}
