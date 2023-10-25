import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = () => {
  const { store, actions } = useContext(Context);

  const characterList = store.characters.map(character => {
    const showDetails = character.url === store.details.url;

    return (
      <div key={character.name} className="card text-white bg-secondary border border-5 border-light rounded mb-4 me-3 col-4">
        <div className="card-body">
          <div className="px-2 py-1 bg-secondary inside-borders-vehicle">
            <h5 className="text-start card-title mb-1 text-black text-truncate">{character.name}</h5>
          </div>
          <img src={`https://starwars-aws.s3.amazonaws.com/img/characters/${character.name}.jpg`} className="card-img-top rounded mx-auto d-block display-image inside-borders-vehicle mt-3 mb-1" alt="..." />
          <p className="text-start text-black bg-secondary px-2 mx-0 mb-1 inside-borders-vehicle card-class"></p>
          <div className="card-text text-black card-body-font-size inside-borders-vehicle px-3 py-2">
            <dl className="row">
              <dt className="col-sm-4 text-start">Height:</dt><dd className="col-sm-8 text-start"> {character.height} cm</dd>
              <dt className="col-sm-4 text-start">Hair color:</dt> <dd className="col-sm-8 text-start"> {character.hair_color}</dd>
              <dt className="col-sm-4 text-start">Eye color:</dt> <dd className="col-sm-8 text-start"> {character.eye_color}</dd>
            </dl>
          </div>

          <div className="d-flex my-1 flex-row justify-content-between align-items-center">
            <Link to="/details">
              <button onClick={() => actions.setDetails(character.url)}>
                More info
              </button>
            </Link>
            <button onClick={() => actions.addToFavorites(character.name, character.url)} className="fav-btn mt-2"></button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container overflow-auto">
      <div className="d-flex flex-row text-center">
        {characterList}
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={() => actions.previousCharactersPage()}>Previous</button>
          </li>
          {store.totalCharactersPages > 3 &&
            <>
              <li className="page-item"><button className="page-link" onClick={() => actions.setCharactersPage(1)}>1</button></li>
              <li className="page-item"><button className="page-link" onClick={() => actions.setCharactersPage(2)}>2</button></li>
              <li className="page-item"><button className="page-link" onClick={() => actions.setCharactersPage(3)}>3</button></li>
            </>
          }
          <li className="page-item">
            <button className="page-link" onClick={() => actions.nextCharactersPage()}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Characters;
