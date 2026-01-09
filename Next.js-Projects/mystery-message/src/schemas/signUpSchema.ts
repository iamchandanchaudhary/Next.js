import z from "zod";

export const usernameValidation = z
    .string()
    .min(2, "Username at least 2 Character.")
    .max(20, "Username must not be 20 Character.")
    .regex(/^[a-zA-Z0-9]+$/, "")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "password must be 6 character"}),
})