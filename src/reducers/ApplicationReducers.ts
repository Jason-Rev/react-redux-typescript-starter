
import {combineReducers } from 'redux';
import {Action} from '../Actions/Action';
import {ApplicationState} from './ApplicationState';

export const applyAction: (state, action) => ApplicationState = combineReducers({
    updateCount,
});

function updateCount(state: number, action: Action) {
    return (state || 0) + 1;
}
