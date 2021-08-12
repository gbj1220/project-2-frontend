import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        width: 500,
        height: 500,
        minWidth: 275,
        margin: "auto",
        marginTop: "20px"
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
	const user = useSelector(state => state ? state.applicants : null)
    
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Thank you for applying, {user && user[0].firstName}.
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Your application was submitted successfully.
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.button} size="small">
                    <Link to='/'>
                        GO BACK TO HOME PAGE
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}

