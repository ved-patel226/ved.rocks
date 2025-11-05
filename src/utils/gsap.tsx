import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined" && (gsap as any).registerPlugin) {
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    ScrambleTextPlugin,
    ScrollSmoother
  );
}

export default gsap;
export {
  useGSAP,
  ScrollTrigger,
  SplitText,
  ScrambleTextPlugin,
  ScrollSmoother,
};
