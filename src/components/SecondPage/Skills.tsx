import styles from "../../css/components/SecondPage/Skills.module.css";
import base from "../../css/index.module.css";
import { FaPython, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPytorch,
  SiSass,
  SiFlask,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    {
      name: "Python",
      icon: FaPython,
      description: "Versatile Programming language",
      link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    },
    {
      name: "React",
      icon: FaReact,
      description: "JavaScript library",
      link: "https://en.wikipedia.org/wiki/React_(software)",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      description: "JavaScript with types",
      link: "https://en.wikipedia.org/wiki/TypeScript",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      description: "JSON-like database",
      link: "https://en.wikipedia.org/wiki/MongoDB",
    },
    {
      name: "PyTorch",
      icon: SiPytorch,
      description: "Machine Learning Library",
      link: "https://en.wikipedia.org/wiki/PyTorch",
    },
    {
      name: "Sass",
      icon: SiSass,
      description: "CSS preprocessor",
      link: "https://en.wikipedia.org/wiki/Sass_(style_sheet_language)",
    },
    {
      name: "Flask",
      icon: SiFlask,
      description: "Web Framework in Python",
      link: "https://en.wikipedia.org/wiki/Flask_(web_framework)",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={base.underline} data-aos="fade-up">
        <h1>Skills</h1>
      </div>
      <div>
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className={`${styles.skill} click`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={() => window.open(skill.link, "_blank")}
            >
              <div>
                <h1>{skill.name}</h1>
                <Icon />
              </div>
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
