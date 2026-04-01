import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div hidden>
        <a
          href="https://github.com/yujisatojr"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/yujisato/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p>built with 💜 {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
