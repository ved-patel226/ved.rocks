import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiPython } from "react-icons/di";
import { MdTempleHindu } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Experience() {
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
      icon: <GiArtificialIntelligence />,
    },

    {
      title: "Shree Umiya Dham Hindu Temple Website REDO",
      date: "November 2024",
      description: "Working on a new website for the temple",
      icon: <MdTempleHindu />,
    },
  ];

  return (
    <VerticalTimeline>
      {work.map((item, _) => (
        <VerticalTimelineElement
          key={item.title}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#000000", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  #000000" }}
          date={item.date}
          iconStyle={{ background: "#000000", color: "#ffffff" }}
          icon={item.icon}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
