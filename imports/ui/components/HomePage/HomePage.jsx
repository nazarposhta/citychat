import React, { Component } from 'react';
import {withTracker} from "meteor/react-meteor-data";

const HomePage = (props) => {
    const { ready } = props;
    return(
        <div className="HomePage">
            <div className="container">
                {
                    ready ?
                        <div>
                            Home page
                        </div>
                        :
                        <div>
                            Loading...
                        </div>
                }
            </div>
        </div>
    )
};
export default withTracker((props) => {
    return {
        ready: true
    }
})(HomePage);
