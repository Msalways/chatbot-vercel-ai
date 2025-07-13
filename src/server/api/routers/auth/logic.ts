import type { PrismaClient } from "@prisma/client";
import type { RegisterInput } from "./validation";
import { hashSync } from "bcrypt";
import { TRPCError } from "@trpc/server";

const registerUser = async (db: PrismaClient, data: RegisterInput) => {
  try {
    const { name, email, password } = data;
    const hashedPassword = await hashSync(password, 15);
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return "User created successfully";
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: error instanceof Error ? error.message : "Unknown error",
      cause: error,
    });
  }
};

export { registerUser };
