import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    // ✅ Logged in -> redirect to chat
    redirect("/chat");
  } else {
    // ❌ Not logged in -> redirect to login
    redirect("/login");
  }

  return null; // Optional fallback
}
