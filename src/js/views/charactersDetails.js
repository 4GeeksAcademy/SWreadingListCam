import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const CharactersDetails = () => {
  const { store } = useContext(Context);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
   
    if (store.details.films) {
      Promise.all(
        store.details.films.map((filmUrl) =>
          fetch(filmUrl).then((response) => response.json())
        )
      ).then((filmData) => setFilms(filmData));
    }

  
    if (store.details.species) {
      Promise.all(
        store.details.species.map((speciesUrl) =>
          fetch(speciesUrl).then((response) => response.json())
        )
      ).then((speciesData) => setSpecies(speciesData));
    }
  }, [store.details]);

  return (
    <div className="container">
      <h1>{store.details.name}</h1>
      <p>Height: {store.details.height} cm</p>
      <p>Hair color: {store.details.hair_color}</p>
      <p>Eye color: {store.details.eye_color}</p>

      <h2>Films:</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film.title}</li>
        ))}
      </ul>

      <h2>Species:</h2>
      <ul>
        {species.map((specie, index) => (
          <li key={index}>{specie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersDetails;

