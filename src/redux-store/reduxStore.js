import { createStore, compose, applyMiddleware } from 'redux';
import { reducer, initialState } from '../applicant-state/applicantState';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const reduxStore = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
