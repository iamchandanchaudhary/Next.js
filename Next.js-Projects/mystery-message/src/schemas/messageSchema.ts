import z from "zod";

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "Message at least 10 Character."})
    .max(300, {message: "Message must be 300 Character."})
})