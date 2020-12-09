import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import "./Menu.scss";

export default withTracker(() => {
    return {
        userId: Meteor.userId()
    }
})((props) => {
    const { userId } = props;
    return(
        <header className="menu">
            <div className="container">
                <div className="navbar clearfix">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        {
                            userId ?
                                <a className="nav-link" onClick={() => {Meteor.logout()}}>
                                    Logout
                                </a>
                                :
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/create-account">Create account</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </React.Fragment>
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
});
