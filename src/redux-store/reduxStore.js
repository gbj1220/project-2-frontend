import { createStore, compose, applyMiddleware } from 'redux';
import { reducer as applicantReducer } from '../applicant-state/applicantState';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	applicant: [],
};

export const reduxStore = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
