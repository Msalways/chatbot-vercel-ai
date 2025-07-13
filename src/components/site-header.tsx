// components/site-header.tsx

"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export function SiteHeader() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <header className="w-full border-b px-4 py-2 flex items-center justify-between">
      <div className="text-xl font-bold">Your App</div>

      {session?.user && (
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={session.user.image ?? ""}
                alt={session.user.name ?? ""}
              />
              <AvatarFallback>
                {session.user.name?.charAt(0) ?? "U"}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>

          <PopoverContent className="w-48 p-2">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-muted-foreground px-2">
                {session.user.name}
              </div>
              <Button
                variant="destructive"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </header>
  );
}
