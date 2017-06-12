import {LOGIN} from '../constants/ActionTypes';

export function login(value) {
    return {
        type: LOGIN,
        payload: value
    }
}
