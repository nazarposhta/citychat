import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";

const Menu = (props) => {
    const { userId } = props;
    return(
        <header className="menu p-3">
            <div className="container">
                <div className="menu-inner">
                    <div className="navbar">
                        <Link to="/" className="logo">
                            <img src="/images/logo.svg" width="200" alt="Live Menu"/>
                        </Link>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/how-it-works">How it works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                            {
                                userId ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <button type="button"
                                                    className="btn btn-primary"
                                                    onClick={() => {Meteor.logout()}}
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="btn btn-primary" to="/create-account">Sign-up</Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
                <Breadcrumbs />
            </div>
        </header>
    )
};
export default withTracker(() => {
    return {
        userId: Meteor.userId()
    }
})(Menu);
