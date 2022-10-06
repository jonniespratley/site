import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    secondary: {
        marginRight: '7rem',
        [theme.breakpoints.down('md')]: {
            marginRight: 0
        }
    }
}));

export const Experience = ({ resume }) => {
    const styles = useStyles();
    return (
        <List component="nav">
            {resume.work.map((job) => (
                <ListItem divider key={`${job.id}`}>
                    <ListItemText
                        className={styles.secondary}
                        primary={`${job.title}, ${job.company}`}
                        secondaryTypographyProps={{
                            component: 'div'
                        }}
                        secondary={
                            <React.Fragment>
                                <ul>
                                    {job.description.split('.').map((t) => {
                                        return t && <li key={t}>{t}</li>;
                                    })}
                                </ul>
                            </React.Fragment>
                        }
                    />
                    <ListItemSecondaryAction>{job.years}</ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};
