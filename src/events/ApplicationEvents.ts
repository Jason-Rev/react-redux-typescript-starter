import Store = Redux.Store;

import * as Actions from '../actions/Actions';

export declare interface ApplicationEvents {
    onAppInit: () => void;
}

export function getApplicationEvents(store: Store): ApplicationEvents {
    return {
        onAppInit: () => {
            store.dispatch(Actions.appInit());
        },
    };
}

