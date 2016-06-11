# react-redux-typescript-starter
Starter project for React + Redux + Typescript

### Installation
From project directory.

```
$ npm install
```

## Useful commands:

### Tests:
Run Unit tests.
```
$ npm run test
```

Run Unit tests in watch mode
```
$ npm run test:w
```

Run Unit test coverage:
```
$ npm run coverage
```

### Debug Server:
Launch a live server that is updated with code changes.
```
$ npm run start
```

### Node version issues

* None

## Terms
### Reducer
A reducer updates the Application State according to an action.

### Action
A set of data to be applied to the Application State.
It has two parts:
1. type -- the action identifier
2. payload -- the data to be used.

### Application State
This is the data model used to drive the application.  All state is in Application State.
We use Redux to manage the Application State.
Application State is only modified through the reducers using redux.store.dispatch()

### EventFunction
EventsFunction when called create action or actions and dispatches them.
It is the interface between the component and the Application State.
EventFunctions are used to make things happen.  Provides the separation of concern
between components and the Application State.  EventFunctions are injected into components
through their properties.

### AsyncAction
AsyncActions are used to perform any asynchronous requests, for example, calling the a server API.


## Writing Components
1. Define the Application State to be used by the component
1. Create the Stateless Render function or ReactComponent
    * define the properties
    * write unit test for component (use enzyme).
1. Create Action/Reducer pairs
    1. Define the Actions that can be applied to the Application State
    2. Define the reducers that handle the Actions
        * create a default reducer
    3. write unit tests for both Actions and Reducers
1. Add User Interaction
    * Define the Actions that the component that it might trigger
    * write the event functions


## Event cycle
1. Component triggers an event through onActionFunction that is injected into the component.
2. The onActionFunction calls store.dispatch(Action)
3. The reducers listen for the Action and change the Application State
4. Redux tells react to render the new Application State
5. Start over at 1.

## Async Action
Async Actions are actions that used for making async calls to things like the
API.  The Api calls will result in a store.dispatch(resultingAction).

