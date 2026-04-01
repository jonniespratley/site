import "../styles/Project.scss";
import { useResumeData } from "../hooks";
import { Grid, Typography } from "@mui/joy";
import { Book } from "./Book";

function Publications() {
  const { portfolio } = useResumeData();

  return (
    <div id="publications" className="page">
      {/** TODO - Publications Here */}
      <Typography level="h2" gutterBottom>
        Publications
      </Typography>
      <br />
      <Grid
        container
        rowSpacing={10}
        columnSpacing={{ xs: 2, sm: 4, md: 6 }}
        sx={{
          alignItems: "stretch",
        }}
      >
        {portfolio.publications.map(
          (item, index) =>
            !item.hidden && (
              <Grid sm={6} md={4} xl={3} className="publication">
                <Book {...item} />
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
}
export default Publications;
