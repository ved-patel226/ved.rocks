import "./css/App.css";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SelectedWorks from "./components/SelectedWorks";
import Footer from "./components/Footer";

import Background from "./components/Molecules/Background";
import NavBar from "./components/NavBar";

import { ScrollSmoother, ScrollTrigger } from "./utils/gsap";
import { useEffect, useState } from "react";

const ScrollToTop = (props: { children: any }) => {
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (
      document.readyState === "complete" &&
      document.fonts.status === "loaded"
    ) {
      setLoaded(true);
    } else {
      const checkFonts = () => {
        if (document.fonts.status === "loaded") {
          setLoaded(true);
        }
      };

      window.addEventListener("load", checkFonts);
      document.fonts.ready.then(checkFonts);

      return () => {
        window.removeEventListener("load", checkFonts);
      };
    }
  }, []);

  useEffect(() => {
    if (Loaded) {
      console.log("ScrollSmoother init");

      ScrollTrigger.clearScrollMemory("manual");
      window.scrollTo(0, 0);

      const smoother = ScrollSmoother.create({
        smooth: 0.5,
        effects: true,
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smoothTouch: 0.1,
      });

      return () => {
        smoother.kill();
      };
    }
  }, [Loaded]);

  if (!Loaded) {
    return (
      <div className="loading-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ScrollToTop>
      <div id="smooth-wrapper">
        <Background />
        <NavBar />

        <div id="smooth-content">
          <Hero />
          <Skills />
          <SelectedWorks />
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  );
}

export default App;
