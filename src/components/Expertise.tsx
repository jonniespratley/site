import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faSketch,
  faGit,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../styles/Expertise.scss";
import { useResumeData } from "../hooks";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Pandas",
  "Selenium",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

type SkillProps = {
  name: string;
  level?: number;
  description: string;
  icon: string;
};

const iconsMap = {
  git: faGit,
  sketch: faSketch,
};

function Skill({ name, icon, description }: SkillProps) {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={iconsMap.git} size="3x" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function Expertise() {
  const { resume } = useResumeData();

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Work experience</h1>
        <div className="skills-grid">
          {/* TODO - Skills Grid  */}

          {resume.skills.map((skill, index) => (
            <Skill key={`skill-${index}`} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
