
import { Container, Typography, Box, Grid, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import { FeatureTitle, Projects, Publications } from '../components';



const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    avatar: {
        minWidth: 80
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
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
import resumeData from '../resumeData.json';


const HomePage = () => {
    const { resume, main, portfolio } = resumeData;
    const styles = useStyles();
    return (
        <div>
            <div className={styles.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {main.hero}
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        {main.description}
                    </Typography>
                </Container>
            </div>
            <Container fixed>
                <Box className={styles.offset}>
                    <br />
                    <Grid container spacing={4}>
                        <Grid item>
                            <FeatureTitle title="Projects" />
                            <Projects projects={portfolio.projects} />
                        </Grid>

                        <Grid item>
                            <FeatureTitle title="Publications" />
                            <Publications publications={portfolio.publications} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
           
        </div>
    );
};

export default HomePage;
