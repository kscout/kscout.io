import React, { FunctionComponent, Component } from 'react';
import logo from './logo.svg';
import { Preview } from './pages/Preview';
import { Switch, Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { AppGrid } from './components/AppGrid';
import { AppDetails } from './pages/AppDetails';
import { AppHub } from './pages/AppHub';
import { KSPage } from './pages/KSPage';
import { AppHubSidebar } from './components/AppHubSidebar';

const App: React.FC = (props) => {

  const history = createBrowserHistory();


  return (
    <div className="App">

    <Router history={history}>
    <Switch>
        <Route path="/" component={AppHub}></Route>
      </Switch>
      <Switch>
        <Route path="/preview/:appid" component={Preview}></Route>
      </Switch>
      <Switch>
        <Route path="/apps/:appid" component={AppDetails}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
