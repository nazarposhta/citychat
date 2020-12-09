import React from 'react';
import Login from './components/login/Login.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import CreateAccount from './components/create_account/CreateAccount.jsx';
import Menu from './components/menu/Menu.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";

const App = () => {
    return(
            <Router>
                <Menu/>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/create-account">
                        <CreateAccount/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        )

};

export default App;
