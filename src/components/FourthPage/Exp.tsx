import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DiPython } from "react-icons/di";
import { MdTempleHindu } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import styles from "../../css/components/FourthPage/exp.module.css";

export default function Timeline() {
  useEffect(() => {
    AOS.init();
  }, []);

  const work = [
    {
      title: "PCEP",
      date: "April 2024",
      description: "Beginner Python Certification",
      icon: <DiPython />,
    },
    {
      title: "PCAP",
      date: "July 2024",
      description: "Associate Python Certification",
      icon: <DiPython />,
    },
    {
      title: "CS50AI",
      date: "July 2024",
      description: "AI/ML course from Harvard",
      icon: <FaSchool />,
    },
    {
      title: "Shree Umiya Dham Hindu Temple",
      date: "November 2024",
      description: "Working on a new website for the temple",
      icon: <MdTempleHindu />,
    },
  ];

  return (
    <div className={styles.timeline}>
      {work.map((item, index) => (
        <>
          <div
            key={index}
            className={styles.timelineEntry}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className={styles.timelineEntryMarker}>{item.icon}</div>
            <div className={styles.timelineEntryCard}>
              <h3 className={styles.timelineEntryCardTitle}>{item.title}</h3>
              <p className={styles.timelineEntryCardDate}>{item.date}</p>
              <p className={styles.timelineEntryCardDescription}>
                {item.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
