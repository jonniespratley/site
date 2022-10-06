import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Education, Experience, FeatureTitle, SectionTitle } from '../components';
import resumeData from '../resumeData.json';

const AboutPage = () => {
    const { main, resume } = resumeData;
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <SectionTitle title="Profile" />
                    <Typography variant="body2">{main.bio}</Typography>

                    <SectionTitle title="Employment History" />
                    <Experience resume={resume} />
                    <SectionTitle title="Education" />
                    <Education education={resume.education} />
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutPage;
