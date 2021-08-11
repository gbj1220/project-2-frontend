import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: "auto",
        textAlign: "center",
    }
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Thank you for applying, [First name].
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Your application was submitted successfully.
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.button} size="small">GO BACK TO HOME PAGE</Button>
            </CardActions>
        </Card>
    );
}

