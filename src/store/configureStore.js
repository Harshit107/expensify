
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { expenseReducer } from '../reducers/expenses'
import { filterReducer } from '../reducers/filter'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storeConfig = () => {

    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer,
            auth : authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
export default storeConfig;

