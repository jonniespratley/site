import { Paper, Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@material-ui/lab';
import React from 'react';

export const JobTimeline = () => (
  <Timeline align="alternate">
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography color="textSecondary">Current</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
    </TimelineItem>

    <TimelineItem>
      <TimelineContent>
        <Paper elevation={3}>
          <Typography variant="h6" component="h1">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
);
export default JobTimeline;
