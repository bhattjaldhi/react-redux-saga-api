import {
    createStore,
    applyMiddleware 
} from 'redux';
import {
    combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga'


import reducers from './reducers'
import sagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(sagas)

export default store;