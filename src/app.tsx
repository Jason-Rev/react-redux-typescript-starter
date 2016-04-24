/**
 * Created by jasondent on 21/01/2016.
 */

/* tslint:disable:no-unused-variable */
// Required for JSX to compile
import React = require('react');
/* tslint:enable:no-unused-variable */
import ReactDOM = require('react-dom');
import Redux = require('redux');
import { applyAction } from './reducers/ApplicationReducers';
import { DevTools } from './components/DevTools';
import {default as thunkMiddleware} from 'redux-thunk';
import {getApplicationEvents} from './events/ApplicationEvents';
import {App} from './components/App';


const store = Redux.createStore(
    applyAction,
    Redux.compose(
        Redux.applyMiddleware(
            thunkMiddleware
        ),
        DevTools.instrument()
    )
);

const actions = getApplicationEvents(store);

export function AppRoot() {
    const state = store.getState();
    return (
        <div>
            <App {...state} {...actions} />
            <DevTools store={store}/>
        </div>
    );
}

export function render() {
    const rootElement = document.getElementById('app');
    ReactDOM.render( <AppRoot />, rootElement );
}

// Link the renderer to the store.
store.subscribe(render);
// Force the initial state and cause a render to happen.
actions.onAppInit();
