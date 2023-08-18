"use server";

import EmailTemplate from "@/components/email.tamplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["foysalkazi11@gmail.com"],
      subject: "Message form contract form",
      text: "Message",
      // react: "Hello world",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export default sendEmail;
