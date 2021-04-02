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
    Container,
    ListItemIcon
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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
        //maxWidth: 760,
        margin: '0 auto'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
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
const Education = ({ education }) => (
    <List>
        {education.map((edu: IEducation) => (
            <ListItem key={edu.school}>
                <ListItemText primary={edu.school} secondary={edu.description} />
                <ListItemSecondaryAction>{edu.graduated}</ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

const Skills = ({ skills }) => {
    return (
        <List>
            {skills.map((skill) => (
                <ListItem key={skill.name}>
                    <ListItemText primary={skill.name} secondary={skill.description} />
                </ListItem>
            ))}
        </List>
    );
};
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphone from '@material-ui/icons/PhoneIphone';

export default function App() {
    const { resume, main, portfolio } = resumeData;
    const styles = useStyles();

    const UserCard = () => (
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

                <Box display="flex" justifyContent="spaceAround" alignItems="center">
                    <IconButton color="secondary">
                        <EmailIcon />
                    </IconButton>
                    <IconButton color="secondary">
                        <PhoneIphone />
                    </IconButton>

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
            </Box>
        </Paper>
    );

    return (
        <div className="App">
            <Container fixed>
                <Grid container spacing={4}>
                    <UserCard />
                    <FeatureTitle title="Projects" />
                    <Projects projects={portfolio.projects} />

                    <FeatureTitle title="Publications" />
                    <Publications publications={portfolio.publications} />
                </Grid>
            </Container>
        </div>
    );
}
