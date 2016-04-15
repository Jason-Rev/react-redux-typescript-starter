import {ApplicationState} from '../reducers/ApplicationState';

export * from '../constants/Actions';

export interface Payload {
}

export interface Action {
    type: string;
    payload: Payload;
}

export interface StringPayloadAction {
    type: string;
    payload: string;
}

export type FnGetApplicationState = () => ApplicationState;

export interface ThunkInterface<T> {
    <T>(dispatch: Redux.Dispatch, getState?: () => T): any;
}

export interface AppThunkInterface extends ThunkInterface<ApplicationState> {}

