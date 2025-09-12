import "./css/App.css";

import Hero from "./components/Hero";
import { ScrollSmoother } from "./utils/gsap";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("ScrollSmoother init");

    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <img src="images/skyline.png" className="background"></img>
        <Hero />
        {Array.from({ length: 50 }).map((_) => (
          <br />
        ))}
      </div>
    </div>
  );
}

export default App;
