import { z } from "zod";

const envSchema = z.object({
    DATABASE_NAME: z.string(),
    DATABASE_HOST: z.string(),
    DATABASE_USER: z.string(),
    DATABASE_PASS: z.string(),
    DATABASE_PORT: z.string(),
    PORT: z.string(),
})

export const env = envSchema.parse(process.env)
