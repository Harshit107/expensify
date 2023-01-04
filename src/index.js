/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom';
import './style/index.css';
import AppRouter, { history } from './router/AppRouter.js'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { visibleExpense } from './selectors/expenses'
import {  startSetExpense } from './actions/epenses'
import { login, logout} from './actions/auth'
import { firebase } from './firebase/firebase.js'
import {LoadingPage} from './component/LoadingPage'

import React from 'react'
const store = configureStore();

console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    const expenses = state.expenses;
    const filters = state.filters;
    console.log(visibleExpense(expenses, filters));
})

const jsx = (
  <Provider store = { store }>
    <AppRouter />
  </Provider>
);


ReactDOM.render(<LoadingPage />, document.getElementById('root'))

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'))
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User ID ", user.uid)
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
      if (history.location.pathname === '/login') {
        window.location.href="/"
      }
    })
  }
  else {
    store.dispatch(logout())
    if (history.location.pathname !== '/login') {
      window.location.href="/login"
    }
    else {
      renderApp();
    }
  }
})















// store.dispatch(removeExpense({ id : expenseOne.expense.id }))
// store.dispatch(editExpense( expenseTwo.expense.id, { amount : 3000, description : "House Rent 2020" } ))

// setTimeout(()=> {
//   // store.dispatch(setTextFilter('Water Bill'));
//   store.dispatch(sortByDate());
// },2000)

// store.dispatch(setTextFilter('Water Bill'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(-25));
// store.dispatch(setEndDate(120));





























/*

ReactDOM.render(
  < Warning isWarming= {true} info='passing props to activity'/>,
  document.getElementById('root')
);


const Info = (props)=> (
  <div>
    <p>Hello is a paraggraph from Info Activity : {props.info}</p>
  </div>
);

const WithWarningProps = (WrapperProps) => {

  return (props) => (
    <div>
    {props.isWarming && <p>This is warning props</p>}
    <WrapperProps {...props} />
    </div>
  );
  
}


const Warning = WithWarningProps(Info);


*/
