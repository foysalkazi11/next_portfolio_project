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
        After completing masters's degree in{" "}
        <span className="font-medium">Finance</span>, I decided to pursue my
        passion for programming. I learned{" "}
        <span className="font-medium">front-end web development</span> from
        various platform including freeCodeCamp, Udemy and YouTube.{" "}
        <span className="italic">My favorite part of programming</span> is the
        critical thinking and problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js</span>. I am also familiar
        with TypeScript. I am always looking to learn new technologies. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy spending
        time with family, playing with kids and prayer. I am also curious to
        explore new places, local cuisine,culture and history .
        {/* <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar. */}
      </p>
    </motion.section>
  );
};

export default About;
