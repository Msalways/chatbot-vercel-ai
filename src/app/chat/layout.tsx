// app/chat/layout.tsx

import { Sidebar } from "@/components/sidebar";
import { SiteHeader } from "@/components/site-header";
import React from "react";

export const metadata = {
  title: "Chat",
  description: "Chat with the AI chatbot",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <SiteHeader />
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
}
