import React from 'react';
import { AppBar, Avatar, Box, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { deepOrange, deepPurple, yellow } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    avatar: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        fontSize: 17,
        margin: '0 .5rem'
    },
    title: {
        flexGrow: 1
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500]
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        margin: '0 .5rem'
    }
}));

export const AppHeader = ({ title }) => {
    const classes = useStyles();
    const activeStyle = {
        fontWeight: 'bold'
    };
    return (
        <AppBar position="sticky" color="inherit">
            <Toolbar variant="dense">
                <Box className={classes.title}>
                    <Avatar className={classes.avatar}>JS</Avatar>
                </Box>
                <nav>
                    <NavLink to="/" className={classes.link} activeStyle={activeStyle}>
                        Home
                    </NavLink>
                    <NavLink to="about" className={classes.link} activeStyle={activeStyle}>
                        About
                    </NavLink>
                </nav>
            </Toolbar>
        </AppBar>
    );
};
