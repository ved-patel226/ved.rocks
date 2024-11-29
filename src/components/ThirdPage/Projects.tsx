import styles from "../../css/components/ThirdPage/Projects.module.css";
import base from "../../css/index.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projectsData = [
    {
      name: "MadMonAI",
      description: "AI to summarize MadMoney by Jim Cramer",
      image: "imgs/madmoney.png",
      link: "https://github.com/ved-patel226/MadMoneyAI",
    },

    {
      name: "AlbumMagic",
      description: "Web App to show current playing song on Spotify",
      image: "imgs/albummagic.png",
      link: "https://github.com/ved-patel226/AlbumMagic",
    },

    {
      name: "SeatWiz",
      description: "Intelligent School Seating System",
      image: "imgs/seatwiz.png",
      link: "https://github.com/ved-patel226/SeatWiz",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={base.underline} data-aos="fade-up">
        <h1>Projects</h1>
      </div>
      <div className={styles.projects}>
        {projectsData.map((project, index) => {
          return (
            <div
              key={project.name}
              className={`${styles.project} click`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={index * 150}
              onClick={() => window.open(project.link)}
            >
              <img src={project.image} />

              <div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
