import React from 'react';
import {
    Box,
    styled,
    Grid,
    Typography,
    Link,
    Divider,
    Avatar,
    ListItemAvatar,
    ListItemText,
    List,
    ListItem,
    ListItemSecondaryAction,
    IconButton,
    makeStyles,
    LinearProgress,
    Paper,
    Container
} from '@material-ui/core';
import {
    faFacebookSquare,
    faGithubSquare,
    faLinkedinIn,
    faTwitterSquare,
    IconName
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import resumeData from './resumeData.json';
import { Experience, JobTimeline, Projects, Publications } from './components';
import { IEducation } from './interfaces';

const socialIcons = {
    facebook: faFacebookSquare,
    twitter: faTwitterSquare,
    linkedin: faLinkedinIn,
    github: faGithubSquare
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    avatar: {
        minWidth: 80
    },
    secondary: {
        marginRight: '7rem',
        [theme.breakpoints.down('md')]: {
            marginRight: 0
        }
    },
    paper: {
        padding: theme.spacing(2),
        maxWidth: 760,
        margin: '0 auto'
    }
}));

const SectionTitle = ({ title = 'Section' }) => (
    <Box mb={1}>
        <Typography variant="h5" component="h3">
            {title}
        </Typography>
    </Box>
);

const FeatureTitle = ({ title = 'Section' }) => (
    <Box my={4}>
        <Typography variant="h2" component="h2">
            {title}
        </Typography>
    </Box>
);
const Education = (education: IEducation[]) => (
    <List>
        {education.map((edu: IEducation) => (
            <ListItem key={edu.school}>
                <ListItemText primary={edu.school} secondary={edu.description} />
                <ListItemSecondaryAction>{edu.graduated}</ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default function App() {
    const { resume, main, portfolio } = resumeData;
    const styles = useStyles();
    return (
        <div className="">
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper>
                            <Grid container>
                                {/* MAIN */}
                                <Grid item xs>
                                    <Box display="flex" alignItems="center" mb={4} justifyContent="center">
                                        <Typography variant="h6" component="h2">
                                            {main.name}
                                        </Typography>
                                    </Box>
                                    {/* SOCIAL */}
                                    <Grid item xs={12}></Grid>
                                    <Box display="flex" justifyContent="space-between">
                                        <Box p={2}>
                                            Email: <Link href={`mailto:${main.email}`}>{main.email}</Link>
                                            <br />
                                            Phone: <Link href={`tel:${main.phone}`}>{main.phone}</Link>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        {main.social.map((s) => (
                                            <IconButton
                                                aria-label={s.name}
                                                color="secondary"
                                                key={s.name}
                                                onClick={() => {
                                                    window.open(s.url, '_blank');
                                                }}
                                            >
                                                <FontAwesomeIcon icon={socialIcons[s.name] as IconName} />
                                            </IconButton>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={styles.paper}>
                            <Grid container>
                                {/* WORK EXPERIENCE */}
                                <Grid item xs={12}>
                                    <SectionTitle title="Experience" />
                                    <Experience resume={resume} />
                                </Grid>

                                {/* Skills */}
                                <Grid item>
                                    <SectionTitle title="Technical" />
                                    {Skills()}
                                </Grid>

                                {/* EDUCATION */}
                                <Grid item xs={12}>
                                    <SectionTitle title="Education" />
                                    {Education}
                                </Grid>
                            </Grid>
                        </Paper>

                        <Grid container>
                            {/* PUBLICATIONS */}
                            <Grid item xs={12}>
                                <FeatureTitle title="Publications" />
                                <Publications publications={portfolio.publications} />
                            </Grid>
                        </Grid>

                        <Grid container>
                            {/* PROJECTS */}
                            <Grid item xs={12}>
                                <FeatureTitle title="Projects" />
                                <Projects projects={portfolio.projects} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

    function Skills() {
        return (
            <List>
                {resume.skills.map((skill) => (
                    <ListItem key={skill.name}>
                        <ListItemText primary={skill.name} secondary={skill.description} />
                    </ListItem>
                ))}
            </List>
        );
    }
}
