import About from "@/components/About";
import Contract from "@/components/Contract";
import Experience from "@/components/Exprience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section-divider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contract />
    </main>
  );
}
