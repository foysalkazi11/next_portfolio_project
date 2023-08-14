import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

const Contract = () => {
  return (
    <section id="contact" className="w-[min(100%,38rem)] mb-20 sm:mb-28">
      <SectionHeading>Contract Me</SectionHeading>
      <p className="text-gray-700">
        Please contract me directly at{" "}
        <a className="underline" href="mailto:foysalkazi11@gmail.com">
          foysalkazi11@gmail.com
        </a>{" "}
        or through this form.{" "}
      </p>
      <form className="mt-10 flex flex-col">
        <input type="email" className="h-14 rounded-lg borderBlack" />
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" />
        <button
          type="submit"
          className="flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all "
        >
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
};

export default Contract;
