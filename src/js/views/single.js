import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Single = () => {
    const { store } = useContext(Context);
    const params = useParams();
    
    
    const demoElement = store.demo[params.theid];
    
   
    if (!demoElement) {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Demo element not found!</h1>
                <hr className="my-4" />
                <Link to="/">
                    <span className="btn btn-primary btn-lg" role="button">
                        Back to Home
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <div className="jumbotron">
            <h1 className="display-4">This will show the demo element: {demoElement.title}</h1>
            <hr className="my-4" />
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};


Single.propTypes = {
    match: PropTypes.object
};

export default Single;
