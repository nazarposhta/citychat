import React from 'react';
import "./MenuCard.scss"

const MenuCard = ({imagePath, title, subTitle}) => (
    <div className="MenuCard">
        <div className="card">
            <div className="p-3">
                <img src={imagePath} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text">
                    {subTitle}
                </p>
                <div className="button-container">
                    <a href="#" className="btn btn-primary">Edit</a>
                    <a href="#" className="btn btn-success ms-3">Preview</a>
                </div>
            </div>

        </div>
    </div>
);
export default MenuCard;
