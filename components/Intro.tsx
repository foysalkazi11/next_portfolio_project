"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubAlt, FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"/profile_pic_one.png"}
              alt="pro_pic"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👏
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row "
      >
        <Link
          className="group flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full 
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
          href={"#contact"}
        >
          Contract me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group flex items-center justify-center gap-2 bg-white  px-7 py-3 rounded-full
         outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10
         "
          href="/cv.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="flex items-center justify-center bg-white text-gray-700  p-4 rounded-full 
        outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border
         border-black/10"
          href="https://www.linkedin.com/in/mdfoysalkazi11/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center justify-center bg-white  text-gray-700  p-4 rounded-full 
        outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border
         border-black/10"
          href="https://github.com/foysalkazi11"
          target="_blank"
        >
          <FaGithubSquare className="text-[1.3rem]" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
