import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharactersDetails = () => {
  const { store } = useContext(Context);
  const { id } = useParams();
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${store.apiURL}/people/${id}/`);
        const characterData = await response.json();

        Promise.all(
          characterData.films.map((filmUrl) =>
            fetch(filmUrl).then((response) => response.json())
          )
        ).then((filmData) => setFilms(filmData));

        Promise.all(
          characterData.species.map((speciesUrl) =>
            fetch(speciesUrl).then((response) => response.json())
          )
        ).then((speciesData) => setSpecies(speciesData));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching character details:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [store.apiURL, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{id}</h1>
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
