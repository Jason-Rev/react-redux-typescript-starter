
import {combineReducers } from 'redux';
import {Action} from '../actions/Action';
import {isAppChangeTextAction} from '../actions/Actions';
import {ApplicationState} from './ApplicationState';

export const applyAction: (state, action) => ApplicationState = combineReducers({
    updateCount,
    text,
});

function updateCount(state: number, action: Action) {
    return (state || 0) + 1;
}

function text(state: string = 'Sample Text', action: Action) {
    if (isAppChangeTextAction(action)) {
        return action.payload;
    }
    return state;
}
