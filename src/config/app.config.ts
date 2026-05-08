import z from "zod";

export const AppConfigSchema = z.object({
  port: z
    .string()
    .default("3000")
    .transform((val) => parseInt(val, 10)),
});

const { data, error } = AppConfigSchema.safeParse({
  port: process.env.PORT,
});

if (error) {
  console.error("Invalid app configuration:", error.message);
  process.exit(1);
}

export const appConfig = data;
