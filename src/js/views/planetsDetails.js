import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const PlanetsDetails = () => {
  const { store } = useContext(Context);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    // Fetch residents
    if (store.details.residents) {
      Promise.all(
        store.details.residents.map((residentUrl) =>
          fetch(residentUrl).then((response) => response.json())
        )
      ).then((residentData) => setResidents(residentData));
    }
  }, [store.details]);

  return (
    <div className="container">
      <h1>{store.details.name}</h1>
      <p>Population: {store.details.population}</p>
      <p>Climate: {store.details.climate}</p>
      <p>Terrain: {store.details.terrain}</p>

      <h2>Residents:</h2>
      <ul>
        {residents.map((resident, index) => (
          <li key={index}>{resident.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetsDetails;
