"use server";

import EmailTemplate from "@/eamil/contract-form-email";
import getErrorMessage from "@/lib/utils/getErrorMessage";
import validateString from "@/lib/utils/validateString";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(email, message);

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(email, 50)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contract Form <onboarding@resend.dev>",
      to: "foysalkazi11@gmail.com",
      subject: "Message form contract form",
      reply_to: email as string,
      text: message as string,
      // react: "Hello world",
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};

export default sendEmail;
