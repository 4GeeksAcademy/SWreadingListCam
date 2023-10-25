
import "../../styles/home.css";

import React from "react";
import Vehicles from "./vehicles";
import Characters from "./characters";
import Planets from "./planets";

const Home = () => {
    return (
        <div className="container">
            <div className="home-main">
                <p className="lead my-3 mb-5 py-5">
                    Find your favorite StarWars characters, vehicles and planets!
                </p>


            </div>


            <div className="display-5 text-start py-2 mt-5 ms-4 mb-3">Characters</div>
            <Characters />
            <div className="display-5 text-start ms-4 mb-3">Vehicles</div>
            <Vehicles />
            <div className="display-5 text-start ms-4 mb-3">Planets</div>
            <Planets />

        </div>
    )
}

export default Home