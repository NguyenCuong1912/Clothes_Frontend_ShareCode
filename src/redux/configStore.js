import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ManageUserReducer } from './Reducers/ManageUserReducer';
import { ManageProductReducer } from './Reducers/ManageProductReducer';
import { ManageCartReducer } from './Reducers/ManageCartReducer';


const rootReducers = combineReducers({
    ManageUserReducer,
    ManageProductReducer,
    ManageCartReducer
});


export const store = createStore(rootReducers, applyMiddleware(thunk))
