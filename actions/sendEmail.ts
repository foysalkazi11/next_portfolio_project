"use server";
import React from "react";
import getErrorMessage from "@/lib/utils/getErrorMessage";
import validateString from "@/lib/utils/validateString";
import ContractFormEmailTemplate from "@/email/contract-form-email";
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
  let data;
  try {
    data = await resend.emails.send({
      from: "Contract Form <onboarding@resend.com>",
      to: "foysalkazi11@gmail.com",
      subject: "Message form contract form",
      reply_to: email as string,
      react: React.createElement(ContractFormEmailTemplate, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};

export default sendEmail;
