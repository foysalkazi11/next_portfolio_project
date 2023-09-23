"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I hold a master's degree in <span className="font-medium">Finance</span>
        , but my <span className="font-medium">passion</span> for programming
        led me to a career change. I acquired{" "}
        <span className="font-medium"> web development</span> skills from
        platforms like Full Stack Open, freeCodeCamp, Udemy, and YouTube. I find
        joy in{" "}
        <span className="italic">problem-solving and critical thinking</span> in
        programming, especially when I discover solutions. My core stack
        includes{" "}
        <span className="font-medium">React, Next.js, and TypeScript</span>, and
        I'm also familiar in Node.js and MongoDB. I'm constantly eager to learn
        new technologies and currently seeking a full-time{" "}
        <span className="font-medium">front-end</span> developer role.
      </p>

      <p>
        <span className="italic"> Outside of coding</span> , I cherish family
        time, playing with kids, and moments of prayer. I'm an explorer at
        heart, always curious about new places, local cuisine, culture, and
        history.
        {/* <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar. */}
      </p>
    </motion.section>
  );
};

export default About;
