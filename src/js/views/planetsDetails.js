import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const PlanetsDetails = () => {
  const { store } = useContext(Context);
  const [residents, setResidents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    if (store.details.residents) {
      Promise.all(
        store.details.residents.map((residentUrl) =>
          fetch(residentUrl)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .catch((error) => {
              setError(error.message);
              return null;
            })
        )
      ).then((residentData) => {
      
        const validResidents = residentData.filter((resident) => resident !== null);
        setResidents(validResidents);
      });
    }
  }, [store.details]);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
