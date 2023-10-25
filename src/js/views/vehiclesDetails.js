import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehiclesDetails = () => {
  const { store } = useContext(Context);
  const { id } = useParams(); 
  const [vehicle, setVehicle] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
   
    const selectedVehicle = store.vehicles.find((v) => v.url.endsWith(`/${id}/`));

    if (selectedVehicle) {
      
      setVehicle(selectedVehicle);

      
      Promise.all(selectedVehicle.films.map((filmUrl) => fetch(filmUrl).then((response) => response.json()))
      ).then((filmData) => setFilms(filmData));
    }
  }, [store.vehicles, id]);

  if (!vehicle) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost: {vehicle.cost_in_credits} credits</p>
      <p>Length: {vehicle.length} m</p>
      <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed} km/h</p>

      <h2>Films:</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default VehiclesDetails;
