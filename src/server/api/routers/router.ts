import { createTRPCRouter, publicProcedure } from "../trpc";
import { registerUser } from "./auth/logic";
import { registerSchema } from "./auth/validation";

const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => registerUser(ctx.db, input)),
});

export { authRouter };
