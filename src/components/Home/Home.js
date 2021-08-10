import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'
import { CalendarViewDaySharp, PlayCircleFilledWhite } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		margin: 'auto',
		padding: '20px',
		justifyContent: 'center',	
	},
	details: {
		display: 'flex',
		width: '40%',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: '40%',
		height: 500,
	},
	linkStyle: {
		textDecoration: "none",
		color: "white",	
	}
}));

export default function MediaControlCard() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.cover}
				image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JVnRd7zlWNzp7odslKJ23AHaE8%26pid%3DApi&f=1'
				title="Live from space album cover"
			/>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						Welcome to Company
					</Typography>
					<br />
					<br />
					<Typography variant="subtitle1" color="textSecondary">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br />
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						<br />
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					</Typography>
					<br />
					<br />
					<br />
					<Button variant="contained" color="primary">
						<Link to="/apply" className={classes.linkStyle}>
							Apply
						</Link>
					</Button>
				</CardContent>
			</div>

		</Card>
	);
}