import { Box, Typography } from "@material-ui/core";

export const SectionTitle = ({ title = 'Section' }) => (
  <Box mt={4}>
      <Typography variant="h3" component="h3">
          {title}
      </Typography>
  </Box>
);

export const FeatureTitle = ({ title = 'Section' }) => (
  <Box my={4}>
      <Typography variant="h2" component="h2">
          {title}
      </Typography>
  </Box>
);
