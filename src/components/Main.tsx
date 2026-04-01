import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../styles/Main.scss";
import { useResumeData } from "../hooks";
import { Link, Typography } from "@mui/joy";

function Main() {
  const resumeData = useResumeData();

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}${resumeData.main.image}`}
            alt={resumeData.main.name}
          />
        </div>
        <div className="content">
          <Typography level="h1">{resumeData.main.name}</Typography>
          <Typography level="body-lg">{resumeData.main.occupation}</Typography>
          
          <div className="social_icons">
            {resumeData.main.social?.map((social) => (
              <>
                <Link
                  key={social.name}
                  href={social.url}
                  className={social.className}
                  target="_blank"
                  rel="noreferrer"
                  variant="plain"
                   color="neutral"
                >
                  {social.name === "github" && <GitHubIcon />}
                  {social.name === "linkedin" && <LinkedInIcon />}
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
