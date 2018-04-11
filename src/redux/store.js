import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import combineReducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['navigation'] // navigation will not be persisted
    // whitelist: ['time'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, combineReducers);

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}

