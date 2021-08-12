import axios from 'axios';

export const ADD_APPLICANT = 'codeImmersives/addApplicant';

export const addApplicantFunc =
	(firstName, lastName, dateOfBirth, city, email, phoneNumber) => async (dispatch, getState) => {
		try {
			let response = await axios.post(
				'http://localhost:4000/users/apply',
				{
					firstName,
					lastName,
					dateOfBirth,
					city,
					email,
					phoneNumber,
				}
				);

			dispatch({
				type: ADD_APPLICANT,
				payload: {
					firstName,
					lastName,
					dateOfBirth,
					city,
					email,
					phoneNumber,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

export const initialState = {
	applicants: [],
};

export const reducer = (state = initialState, action) => {
	// const { firstName, lastName, dateOfBirth, city, email, phoneNumber } =
	// 	action.payload;
	console.log(`====== Action.Payload ======`);
	console.log(action.payload);
	switch (action.type) {
		case ADD_APPLICANT:
			return {
				...state,
				applicants: [
					...state.applicants, action.payload
				]
		}
		default: 
			console.log("default");
	}
}
