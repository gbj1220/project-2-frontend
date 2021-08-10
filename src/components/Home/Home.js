import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	text: {
		border: '2px solid black',
	},
	bothComponents: {
		border: '5px solid black',
		display: 'flex',
		justifyItems: 'space-evenly',
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<div className={classes.bothComponents}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JVnRd7zlWNzp7odslKJ23AHaE8%26pid%3DApi&f=1'
						title='Contemplative Reptile'
					/>
				</CardActionArea>
			</Card>
			<Card className={classes.text}>
				<CardContent>
					<Typography>Trucking Company</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
