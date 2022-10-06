import { List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        //maxWidth: 350
        height: '100%'
    },
    secondary: {}
}));

export const PubList = ({ publications }) => {
    const styles = useStyles();
    return (
        <List className={styles.root}>
            {publications &&
                publications.map((p) => (
                    <ListItem key={p.title} button>
                        {p.image && (
                            <ListItemAvatar>
                                <img src={p.image} alt={p.title} />
                            </ListItemAvatar>
                        )}
                        <ListItemText className={styles.secondary} primary={p.title} secondary={p.body} />
                        <ListItemSecondaryAction>{p.date}</ListItemSecondaryAction>
                    </ListItem>
                ))}
        </List>
    );
};
