import {Actions} from '../constants/Actions';
import {Action} from './Action';

export * from '../constants/Actions';
export * from './Action';

export function appInit(): Action {
    return { type: Actions.APP_INIT, payload: null };
}
