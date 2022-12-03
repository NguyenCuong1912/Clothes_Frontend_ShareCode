import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ManageUserReducer } from './Reducers/ManageUserReducer';
import { ManageProductReducer } from './Reducers/ManageProductReducer';


const rootReducers = combineReducers({
    ManageUserReducer,
    ManageProductReducer
});


export const store = createStore(rootReducers, applyMiddleware(thunk))
