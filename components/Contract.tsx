"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks/useSectionInView";
import sendEmail from "@/actions/sendEmail";
import SubmitBtn from "./Submit-but";
import toast from "react-hot-toast";

const Contract = () => {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%,38rem)] mb-20 sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contract Me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6 dark:text-white/80">
        Please contract me directly at{" "}
        <a className="underline" href="mailto:foysalkazi11@gmail.dev">
          foysalkazi11@gmail.com
        </a>{" "}
        or through this form.{" "}
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          name="email"
          placeholder="Your email"
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={50}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contract;
