import React from 'react';
import {
    ListItemText,
    List,
    ListItem,
    ListItemSecondaryAction
} from '@material-ui/core';
import { IEducation } from '../interfaces';

export const Education = ({ education }) => (
    <List>
        {education.map((edu: IEducation) => (
            <ListItem key={edu.school}>
                <ListItemText primary={edu.school} secondary={edu.description} />
                <ListItemSecondaryAction>{edu.graduated}</ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);
