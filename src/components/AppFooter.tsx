import {
    faFacebookSquare,
    faGithubSquare,
    faLinkedinIn,
    faTwitterSquare,
    IconName
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, makeStyles } from '@material-ui/core';

const socialIcons = {
    facebook: faFacebookSquare,
    twitter: faTwitterSquare,
    linkedin: faLinkedinIn,
    github: faGithubSquare
};
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}));

export function AppFooter(props) {
    const styles = useStyles();
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            component="footer"
            p={1}
            mt={5}
            className={styles.footer}
        >
            {props.social.map((s) => (
                <Box key={s.name} p={2}>
                    <IconButton
                        aria-label={s.name}
                        color="inherit"
                        onClick={() => {
                            window.open(s.url, '_blank');
                        }}
                    >
                        <FontAwesomeIcon icon={socialIcons[s.name] as IconName} />
                    </IconButton>
                </Box>
            ))}
        </Box>
    );
}
