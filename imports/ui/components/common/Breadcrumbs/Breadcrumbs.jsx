import React from 'react';

const Breadcrumbs = () => (
    <div className="Breadcrumbs">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item">
                    <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    </div>
);
export default Breadcrumbs;
