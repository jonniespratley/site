import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Education, Experience, FeatureTitle, SectionTitle } from '../components';
import { UserCard } from '../components/UserCard';
import resumeData from '../resumeData.json';

const AboutPage = () => {
    const { main, resume } = resumeData;
    return (
        <div>
            <Grid container>
                <Grid item xs={3}>
                  <UserCard main={main}/>
                </Grid>
                <Grid item xs={9}>
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
