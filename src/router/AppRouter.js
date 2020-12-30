/* eslint-disable no-unused-vars */
import { BrowserRouter, Redirect , Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import React from 'react';
import ExpenceDashboardAppPage from '../component/Dashboard'
import EditPage from '../component/EditPage'
import HelpPage from '../component/HelpPage'
import AddExpencePage from '../component/AddExpencePage'
import Header from '../component/Header'
import LoginPage from '../component/LoginPage'
import NotFoundPage from '../component/NotFoundPage'


export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div>
      { history.location.pathname !== '/login' && <Header />}
      <Switch >
        <Route path="/login" component={ LoginPage } exact={true} />
        <Route path="/" component={ExpenceDashboardAppPage }  exact={true}/>
        <Route path="/create" component={AddExpencePage} exact={true}/>
        <Route path="/edit/:id" component={EditPage} exact={true}/>
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
