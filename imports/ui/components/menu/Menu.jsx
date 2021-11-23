import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

export default withTracker(() => {
    return {
        userId: Meteor.userId()
    }
})((props) => {
    const { userId } = props;
    return(
        <header className="menu">
            <div className="container">
                <Link to="/">
                    <span className="logo">
                        <b>Live</b>
                        <i className="bi bi-qr-code-scan"></i>
                        <b>menU</b>
                    </span>
                </Link>
                <div className="navbar clearfix">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-account">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-account">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-account">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="sign-up">
                    {
                        userId ?
                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={() => {Meteor.logout()}}
                            >
                                Logout
                            </button>
                            :
                            <>
                                <Link className="btn btn-primary" to="/create-account">Sign-up</Link>
                                <Link className="btn btn-primary" to="/login">Sign-in</Link>
                            </>
                    }
                </div>
            </div>
        </header>
    )
});
