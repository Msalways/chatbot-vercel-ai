"use client";

import { useChat } from "@ai-sdk/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChatUI } from "@/components/chat-ui";

export default function Chat() {
  // const { messages, input, handleInputChange, handleSubmit } = useChat();

  // return (
  //   <div className="relative flex flex-col h-screen w-full max-w-3xl mx-auto px-4 py-6 bg-background/50 backdrop-blur-md border rounded-xl shadow-xl">
  //     <ScrollArea className="flex-1 pr-4 overflow-y-auto space-y-4 mb-32">
  //       {messages.map((message) => (
  //         <div
  //           key={message.id}
  //           className={cn(
  //             "flex items-start gap-3",
  //             message.role === "user" ? "justify-end" : "justify-start"
  //           )}
  //         >
  //           {message.role === "assistant" && (
  //             <Avatar>
  //               <AvatarFallback>AI</AvatarFallback>
  //             </Avatar>
  //           )}

  //           <Card
  //             className={cn(
  //               "px-4 py-2 max-w-[75%] text-sm shadow-md",
  //               message.role === "user"
  //                 ? "bg-primary text-primary-foreground rounded-br-none"
  //                 : "bg-muted text-muted-foreground rounded-bl-none"
  //             )}
  //           >
  //             {message.parts.map((part, i) =>
  //               part.type === "text" ? (
  //                 <p key={`${message.id}-${i}`}>{part.text}</p>
  //               ) : null
  //             )}
  //           </Card>

  //           {message.role === "user" && (
  //             <Avatar>
  //               <AvatarFallback>U</AvatarFallback>
  //             </Avatar>
  //           )}
  //         </div>
  //       ))}
  //     </ScrollArea>

  //     <form
  //       onSubmit={handleSubmit}
  //       className="fixed bottom-0 inset-x-0 mx-auto max-w-3xl px-4 py-4 bg-background border-t border-border"
  //     >
  //       <div className="flex items-center gap-2">
  //         <Input
  //           value={input}
  //           onChange={handleInputChange}
  //           placeholder="Type your message..."
  //           className="flex-1 rounded-full px-5 py-3 bg-muted/50 backdrop-blur text-sm border border-border focus-visible:ring-1 focus-visible:ring-primary"
  //         />
  //         <Button type="submit" className="rounded-full px-6 py-3 text-sm">
  //           Send
  //         </Button>
  //       </div>
  //     </form>
  //   </div>
  // );
  return (
    <div>
      <ChatUI />
    </div>
  );
}
