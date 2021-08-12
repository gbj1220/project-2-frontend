import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: "green"
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();
	const user = useSelector(state => state ? state.applicants : null)
	
	console.log('user', user)
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					{/* <IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton> */}
					<Typography variant='h6' className={classes.title}>
						GT Truck Company
					</Typography>
					{user ?
					<Typography>
						{console.log(user)}
						Hello, {user[0].firstName}
					</Typography>
						:
					<Button color='inherit'>
						<Link to="/apply" className={classes.linkStyle}>
							Apply
						</Link>
					</Button>
					}

			
				</Toolbar>
			</AppBar>
		</div>
	);
}
