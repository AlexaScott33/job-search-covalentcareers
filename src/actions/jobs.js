// import {API_BASE_URL} from '../config';

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const fetchJobsRequest = () => ({
    type: FETCH_JOBS_REQUEST
});

export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const fetchJobsSuccess = data => ({
    type: FETCH_JOBS_SUCCESS,
    data
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
    .then(data => {
        dispatch(fetchJobsSuccess(data));
    }).catch(err => {
        dispatch(Jobs(err));
    });
};


