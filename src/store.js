import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from './reducers/jobs';

export default createStore(
    jobsReducer,
    applyMiddleware(thunk)
);