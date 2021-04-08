import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Grid,
    IconButton} from '@material-ui/core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProject } from '../interfaces';

interface ProjectsProps {
    projects?: IProject[];
}

export const Project: React.FC<IProject> = ({ title, body, image, url }) => (
    <Card>
        <CardMedia component="img" alt={title} height="180" image={image} title={title} />
        <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {body}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton
                aria-label={`View ${title} on Github`}
                onClick={() => {
                    window.open(url, '_blank');
                }}
            >
                <FontAwesomeIcon icon={faGithubSquare} />
            </IconButton>
        </CardActions>
    </Card>
);

export const Projects: React.FC<ProjectsProps> = ({ projects }) => (
    <Grid container spacing={4} alignItems="stretch">
        {projects &&
            projects.map((p) => (
                <Grid item md={4} sm={6} xs={12} key={p.title}>
                    <Project {...p} />
                </Grid>
            ))}
    </Grid>
);
