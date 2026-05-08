import z from "zod";

export const UserSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(100),
});

export type User = z.infer<typeof UserSchema>;
