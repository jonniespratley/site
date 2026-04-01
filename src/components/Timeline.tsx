import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Timeline.scss";
import { useResumeData } from "../hooks";

function Timeline() {
  const { resume } = useResumeData();

  return (
    <div id="history">
      <div className="items-container">
        {/** TODO - Prooject Here */}
        <h1>Career History</h1>

        <VerticalTimeline>
          {resume.work.map((item, index) => (
            <VerticalTimelineElement
              key={`${item.id}-${index}`}
              className="vertical-timeline-element--work"
              date={item.years}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.company}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
