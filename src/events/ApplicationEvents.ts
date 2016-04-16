import Store = Redux.Store;
import * as React from 'react';

import * as Actions from '../actions/Actions';

export declare interface ApplicationEvents {
    onAppInit: () => void;
    onTextChange: (text: string) => void;
    onTextChangeEvent: (event: React.SyntheticEvent) => void;
}

export function getApplicationEvents(store: Store): ApplicationEvents {
    return {
        onAppInit: () => { store.dispatch(Actions.appInit()); },
        onTextChange: (text: string) => { store.dispatch(Actions.appChangeText(text)); },
        onTextChangeEvent: (event: any) => { store.dispatch(Actions.appChangeText(event.target.value)); },
    };
}

