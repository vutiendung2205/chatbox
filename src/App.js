import React from 'react';
import './App.css';
import Body from './components/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './components/LogIn';
import NotFound from './components/Reducer/NotFound';
import SignUp from './components/SignUp';
import { onAuthState } from './components/Firebase/Users/index';
import Report from './components/Report';


function App() {
  return (
    <Router>
        <div className="App">
            <Report />
            <Switch>
                <Route exact path="/">
                    <LogIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/home">
                    <Body />
                </Route>
                <Route >
                    <NotFound />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
