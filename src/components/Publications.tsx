import React from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Typography,
    CardMedia,
    Grid,
    CardActions,
    IconButton,
    Collapse,
    Link
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        //maxWidth: 350
        height: '100%'
    },
    media: {
        height: 150,
        // paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        //backgroundColor: red[500],
    },
    actions: {
        justifyContent: 'space-between'
    }
}));

interface PubCardProps {
    title: string;
    image: string;
    body: string;
    date: string;
    url: string;
    subtitle: string;
    downloadable?: boolean;
    expandable?: boolean;
}
/**
 *
 *
 * @param {*} { title, subtitle, image, body, url, date, expandable, downloadable }
 * @returns
 */
const PubCard: React.FC<PubCardProps> = ({ title, subtitle, image, body, url, date, expandable, downloadable }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} component="img" height={120} image={image} title={title} />
            
            <CardHeader
                titleTypographyProps={{
                    variant: 'h6'
                }}
                title={title}
                subheaderTypographyProps={{
                    variant: 'body2'
                }}
                subheader={`${subtitle} - ${date}`}
            />
            
            {!expandable && (
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {body}
                    </Typography>
                </CardContent>
            )}
            {expandable && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography component="p" variant="body2" color="textSecondary">
                            {body}
                        </Typography>
                    </CardContent>
                </Collapse>
            )}

            <CardActions disableSpacing className={classes.actions}>
                {downloadable && (
                    <IconButton
                        aria-label={`View ${title} PDF`}
                        onClick={() => {
                            window.open(url, '_blank');
                        }}
                    >
                        <FontAwesomeIcon icon={faFilePdf} />
                    </IconButton>
                )}
                {expandable && (
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                )}
            </CardActions>
        </Card>
    );
};

export const Publications = ({ publications }) => {
    const styles = useStyles();
    /*
  if (useList) {
   
  }
  */
    return (
        <Grid container spacing={4}>
            {publications.map((p) => (
                <Grid item key={p.title} md={4} sm={6} xs={12}>
                    <PubCard {...p} />
                </Grid>
            ))}
        </Grid>
    );
};
