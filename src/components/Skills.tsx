import React from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3,
    faGithub,
    faGithubAlt,
    faHtml5,
    faJenkins,
    faJs,
    faJsSquare,
    faNodeJs,
    faReact,
    faSketch
} from '@fortawesome/free-brands-svg-icons';

const iconsMap = {
    js: faJs,
    css: faCss3,
    git: faGithubAlt,
    sketch: faSketch,
    react: faReact,
    html5: faHtml5,
    nodejs: faNodeJs,
    ci: faJenkins
};

export const Skills = ({ skills }) => {
    return (
        <Grid container justify="center" alignItems="center" spacing={4}>
            {skills.map((skill) => (
                <Grid item sm={4} xs={6} container direction="column" justify="center" alignItems="center">
                    <FontAwesomeIcon icon={iconsMap[skill.icon]} size="5x" />
                    <Typography variant="h4" component="h3">{skill.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {skill.description}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};
