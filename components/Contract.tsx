"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks/useSectionInView";
import sendEmail from "@/actions/sendEmail";

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
      <p className="text-gray-700 text-center -mt-6">
        Please contract me directly at{" "}
        <a className="underline" href="mailto:foysalkazi11@gmail.com">
          foysalkazi11@gmail.com
        </a>{" "}
        or through this form.{" "}
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="email"
          placeholder="Your email"
          type="email"
          className="h-14 px-4 rounded-lg borderBlack"
          required
          maxLength={50}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contract;
