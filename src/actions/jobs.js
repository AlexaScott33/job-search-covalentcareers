// import {API_BASE_URL} from '../config';

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const fetchJobsRequest = () => ({
    type: FETCH_JOBS_REQUEST
});

export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const fetchJobSuccess = cheeses => ({
    type: FETCH_JOBS_SUCCESS,
    cheeses
});

export const FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR';
export const fetchJobsError = error => ({
    type: FETCH_JOBS_ERROR,
    error
});

export const fetchJobs = () => dispatch => {
    dispatch(fetchJobsRequest());
    fetch('../data.json')
    .then(res => res.json())
    .then(jobs => {
        dispatch(fetchJobsSuccess(jobs));
    }).catch(err => {
        dispatch(Jobs(err));
    });
};


