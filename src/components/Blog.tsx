import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";

import { useResumeData } from "../hooks";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { Chip } from "@mui/joy";

export default function Blog() {
  const { portfolio, blog } = useResumeData();

  return (
    <div id="blog" className="page">
      <Typography level="h2" gutterBottom>
        Blog Posts
      </Typography>
      <br />
      {/** TODO - Prooject Here */}

      <Grid container>
        {blog.categories &&
          blog.categories.map((cat) => (
            <Grid key={cat.id}>
              <Chip
                slotProps={{ action: { component: "a", href: "#as-link" } }}
              >
                {cat.name}
              </Chip>
            </Grid>
          ))}
      </Grid>

      <Box
        className="blog-posts"
        component="ul"
        sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0, m: 0 }}
      >
        {portfolio.projects.map(
          (project) =>
            !project.hidden && (
              <>
                <Card
                  key={project.title}
                  component="li"
                  sx={{ minWidth: 300, flex: 1, flexGrow: 1 }}
                  className="post"
                >
                  <CardOverflow>
                    <AspectRatio ratio="2">
                      <img
                        src={`${process.env.PUBLIC_URL}${project.image}`}
                        loading="lazy"
                        width="100%"
                        alt=""
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <Typography level="h4">{project.title}</Typography>
                    </a>

                    <Typography level="body-md">{project.body}</Typography>
                  </CardContent>
                </Card>
              </>
            )
        )}
      </Box>
    </div>
  );
}
