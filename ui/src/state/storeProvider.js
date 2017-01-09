import applicationReducers from './reducers.js'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { getDefaultState } from './defaultStateProviders'

export default function createNewStore() {
    const initialState = getDefaultState()
    const store = createStore(applicationReducers,
        initialState,
        compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}