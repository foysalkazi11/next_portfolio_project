"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/lib/hooks/useSectionInView";
import { useThemeContext } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useThemeContext();
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData?.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={`${experience?.date}`}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.05)",
                fontSize: "1.5rem",
              }}
              icon={experience?.icon}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
            >
              <h2 className="font-semibold capitalize text-gray-700 dark:text-white/75 tracking-wide">
                {experience?.company}
              </h2>
              <h3 className="font-semibold capitalize tracking-wide">
                {experience?.title}
              </h3>
              <p className="!font-light !mt-0 !text-sm">
                {experience?.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience?.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
