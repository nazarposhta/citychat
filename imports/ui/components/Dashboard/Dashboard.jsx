import React from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import MenuCard from "./MenuCard/MenuCard";
import CreateMenuCard from "./CreateMenuCard/CreateMenuCard";

const Dashboard = ({user}) => {
    if(!user){
        return <div>Loading...</div>
    }
    return(
        <div className="Dashboard">
            <div className="container">
                Dashboard - {user.username}
            </div>
            <div className="Dashboard-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <CreateMenuCard/>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <MenuCard
                                imagePath="/images/bmw.jpg"
                                title="Menu title"
                                subTitle="Menu title"
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <MenuCard
                                imagePath="/images/1.svg"
                                title="Menu title 2"
                                subTitle="Menu subtitle 2"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default withTracker((props) => {
    return {
        user: Meteor.user()
    }
})(Dashboard);
