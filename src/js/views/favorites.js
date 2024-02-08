import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Favorites = () => {
    const { store, actions } = useContext(Context);

    let favList;

    if (store.favorites.length > 0) {
        favList = store.favorites.map(fav => (
            <li key={fav.name} className="d-flex flex-row">
                <Link to="/details">
                    <button onClick={() => actions.setDetails(fav.url)}>{fav.name}</button>
                </Link>
                <button onClick={() => actions.deleteFromFavorites(fav.name)}>x</button>
            </li>
        ));
    } else {
        favList = <li>No favorites yet.</li>;
    }

    return (
        <div className="container-fluid">
            <ul>{favList}</ul>
        </div>
    );
};

export default Favorites;
