"use client";

import { useChat } from "@ai-sdk/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

export function ChatUI() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    error,
    append,
  } = useChat();

  const [retrying, setRetrying] = useState(false);
  const lastUserMessage = useRef<string | null>(null);

  useEffect(() => {
    if (messages.length > 0) {
      const last = messages[messages.length - 1];
      if (last && last.role === "user") {
        lastUserMessage.current =
          last.parts[0]?.type === "text" ? last.parts[0].text : null;
      }
    }
  }, [messages]);

  const handleRetry = async () => {
    if (!lastUserMessage.current) return;
    setRetrying(true);

    await append({
      role: "user",
      content: lastUserMessage.current,
    });

    setRetrying(false);
  };

  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Error Banner */}
      {error && (
        <div className="bg-red-100 text-red-800 border border-red-300 p-4 text-sm rounded mb-4 mx-4 mt-2 flex items-center justify-between">
          <span>⚠️ Error: {error.message || "Something went wrong."}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRetry}
            disabled={retrying}
            className="ml-4"
          >
            {retrying ? "Retrying..." : "Retry"}
          </Button>
        </div>
      )}

      <ScrollArea className="flex-1 overflow-y-auto space-y-4 pr-2 mb-32">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-3",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.role === "assistant" && (
              <Avatar>
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}

            <Card
              className={cn(
                "px-4 py-2 max-w-[75%] text-sm shadow-sm",
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted text-muted-foreground rounded-bl-none"
              )}
            >
              {message.parts.map((part, i) => {
                if (part.type !== "text") return null;

                const parts: React.ReactNode[] = [];
                const regex = /```(\w+)?\n([\s\S]*?)```/g;
                let lastIndex = 0;
                let match;

                while ((match = regex.exec(part.text)) !== null) {
                  const [fullMatch, lang = "plaintext", code] = match;
                  const start = match.index;
                  const end = regex.lastIndex;

                  // Push text before code block
                  if (start > lastIndex) {
                    parts.push(
                      <p key={`${message.id}-${i}-text-${lastIndex}`}>
                        {part.text.slice(lastIndex, start)}
                      </p>
                    );
                  }

                  // Push code block
                  parts.push(
                    <CodeBlock
                      key={`${message.id}-${i}-code-${start}`}
                      code={(code ?? "").trim()}
                      language={lang}
                    />
                  );

                  lastIndex = end;
                }

                // Push remaining text
                if (lastIndex < part.text.length) {
                  parts.push(
                    <p key={`${message.id}-${i}-text-end`}>
                      {part.text.slice(lastIndex)}
                    </p>
                  );
                }

                return parts;
              })}
            </Card>

            {message.role === "user" && (
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {status === "streaming" && (
          <p className="text-muted-foreground text-sm">AI is typing…</p>
        )}
      </ScrollArea>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 inset-x-0 mx-auto max-w-3xl px-4 py-4 bg-background border-t border-border"
      >
        <div className="flex items-center gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 rounded-full px-5 py-3 text-sm"
          />
          <Button type="submit" className="rounded-full px-6 py-3 text-sm">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
