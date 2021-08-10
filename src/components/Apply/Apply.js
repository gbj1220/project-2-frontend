import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Typography,
	Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(15),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(15),
	},
	submit: {
		margin: theme.spacing(5, 0, 2),
	},
}));

export default function SignUp() {
	const classes = useStyles();

	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [dateOfBirth, setDateOfBirth] = useState();
	const [city, setCity] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();

	console.log(`====== First Name ======`);
	console.log(firstName);
	console.log(`====== Last Name ======`);
	console.log(lastName);
	console.log(`====== DOB ======`);
	console.log(dateOfBirth);
	console.log(`====== City ======`);
	console.log(city);
	console.log(`====== Email ======`);
	console.log(email);
	console.log(`====== Phone Number ======`);
	console.log(phoneNumber);

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Driver Application
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={5}>
						<Grid item xs={12}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
								onChange={(e) => setLastName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='dateOfBirth'
								label='Date of Birth'
								name='dateOfBirth'
								onChange={(e) => setDateOfBirth(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='city'
								label='City'
								id='city'
								onChange={(e) => setCity(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='email'
								label='Email'
								id='email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='phoneNumber'
								label='Phone Number'
								id='phoneNumber'
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Apply Now
					</Button>
				</form>
			</div>
		</Container>
	);
}
