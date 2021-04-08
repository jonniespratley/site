import { Paper, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

export const UserCard = ({main}) => (
  <Paper>
      <Box display="flex" alignItems="center" px={1}>
          <List>
              <ListItem button>
                  <ListItemAvatar>
                      <Avatar src={main.image} />
                  </ListItemAvatar>
                  <ListItemText>
                      <Typography variant="h6">{main.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                          {main.description}
                      </Typography>
                  </ListItemText>
              </ListItem>
          </List>
      </Box>
  </Paper>
);
