import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_ERROR
} from '../actions/jobs';

const initialState = {
    data: [],
    loading: false,
    error: null
}

export default function jobsReducer(state=initialState, action) {
    if (action.type === FETCH_JOBS_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === FETCH_JOBS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_JOBS_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}