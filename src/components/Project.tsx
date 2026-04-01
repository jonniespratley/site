import "../styles/Project.scss";
import { useResumeData } from "../hooks";

import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

import Grid from "@mui/joy/Grid";
import { AspectRatio, CardOverflow } from "@mui/joy";

function Project() {
  const { portfolio } = useResumeData();

  return (
    <div id="projects" className="page">
      <Typography level="h2" gutterBottom>
        Projects
      </Typography>
      <br />

      {/** TODO - Prooject Here */}
      <Grid container spacing={6}>
        {portfolio.projects.map(
          (project, index) =>
            !project.hidden && (
              <>
                <Grid
                  key={`project-${index}-${project.title}`}
                  md={4}
                  xl={3}
                  xs={12}
                >
                  <Card>
                    <CardOverflow>
                      <AspectRatio ratio="2">
                        <img
                          src={`${process.env.PUBLIC_URL}${project.image}`}
                          className="zoom"
                          alt="thumbnail"
                          loading="lazy"
                          width="100%"
                        />
                      </AspectRatio>
                    </CardOverflow>

                    <div>
                      <Typography level="h3">{project.title}</Typography>
                      <Typography level="body-md">{project.body}</Typography>
                    </div>
                  </Card>
                </Grid>
              </>
            )
        )}
      </Grid>
    </div>
  );
}

export default Project;
