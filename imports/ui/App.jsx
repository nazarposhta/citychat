import React from 'react';
import Login from './components/Login/Login.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import CreateAccount from './components/CreateAccount/CreateAccount.jsx';
import Menu from './components/Menu/Menu.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Contacts from './components/Contacts/Contacts.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";

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
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/how-it-works">
                        <HowItWorks/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/pricing">
                        <Pricing/>
                    </Route>
                    <Route path="/contacts">
                        <Contacts/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        )

};

export default App;
