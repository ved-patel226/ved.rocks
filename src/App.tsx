import { useEffect, useState } from "react";
import styles from "./css/index.module.css";
import Nav from "./components/SecondPage/Nav";
import Hero from "./components/FirstPage/Hero";
import Skills from "./components/SecondPage/Skills";
import Cursor from "./components/Cursor";
import Projects from "./components/ThirdPage/Projects";
import Experience from "./components/FourthPage/Exp";
import Footer from "./components/FifthPage/Footer";
import Mobile from "./components/Mobile";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <>
        <div className={styles.mobile}>
          <h1>Switch to desktop for a better experience</h1>
          <Mobile />
        </div>
      </>
    );
  }

  return (
    <>
      <Cursor />

      <div>
        <Hero />
        <Nav />
        <hr className={styles.giant} />
        <Skills />
        <hr className={styles.giant} />
        <Experience />
        <hr className={styles.giant} />
        <Projects />
        <hr className={styles.giant} />
      </div>

      <Footer />
    </>
  );
}

export default App;
