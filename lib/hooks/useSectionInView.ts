import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "../types";
type useSectionInViewProps = (
  sectionName: SectionName,
  threshold: number
) => { ref: (node?: Element | null | undefined) => void };
const useSectionInView: useSectionInViewProps = (
  sectionName = "Home",
  threshold = 0.5
) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  return { ref };
};

export default useSectionInView;
