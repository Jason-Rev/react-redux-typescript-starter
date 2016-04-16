import {Actions} from '../constants/Actions';
import {Action} from './Action';

export * from '../constants/Actions';
export * from './Action';

export function appInit(): Action {
    return { type: Actions.APP_INIT, payload: null };
}

export interface AppChangeTextAction extends Action { payload: string; }
export function isAppChangeTextAction(action: Action): action is AppChangeTextAction {
    return action.type === Actions.APP_CHANGE_TEXT;
}
export function appChangeText(text: string): Action {
    return { type: Actions.APP_CHANGE_TEXT, payload: text };
}
