import React from "react";
import { BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40
    shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
    >
      <BsSun />
    </button>
  );
};

export default ToggleTheme;
