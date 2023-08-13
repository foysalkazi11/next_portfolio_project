"use client";
import { links } from "@/lib/data";
import React, { useContext, useState, createContext } from "react";
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);
const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
