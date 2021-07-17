import React from 'react';
import Loading from "react-loading";

const LoadingCard = () => {
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h3>Loading</h3>
            <Loading type="bars" color="dark"/>
        </div>
    );
};

export default LoadingCard;
