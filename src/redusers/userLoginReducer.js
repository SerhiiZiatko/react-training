import {LOGIN} from '../constants/ActionTypes';

const initState =  [];

export default function cards (state = initState, action) {
    switch (action.type) {
        case LOGIN:
            console.log(state);
            return state;
        default:
            return state;
    }
}