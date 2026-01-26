import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {

        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: "Mystery Message | Verification Email",
            react: <Email url="https://example.com" />,
        });

        return { success: true, message: "Verification email sent to your email." }

    } catch (emailError) {
        console.log("Error sending verification email.");
        return { success: false, message: "Failed to send varification email." }
    }
}