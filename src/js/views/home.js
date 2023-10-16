
import "../../styles/home.css";

import React from "react"
import Vehicles from "./vehicles"
import People from "./people"
import Planets from "./planets"

const Home = () => {
    return (
        <div className="container">
            <div className="home-main">
                <div className="display-3 my-4 py-5">STAR WARS</div>
                <p className="lead my-3 mb-5 py-5">
                     Find StarWars characters, vehicles and places and select your favorite ones!
                </p>

                <p className="lead my-3 mb-5 py-5">
                    List
                </p>
            </div>

            
            <div className="display-5 text-start py-2 mt-5 ms-4 mb-3">People</div>
            <People />
            <div className="display-5 text-start ms-4 mb-3">Vehicles</div>
            <Vehicles />
            <div className="display-5 text-start ms-4 mb-3">Planets</div>
            <Planets />

        </div>
    )
}

export default Home