import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import { Context } from "../store/appContext"

const Navbar = () => {
    const {store, actions} = useContext(Context)

    let favList = store.favorites.length > 0 && store.favorites.map((fav) => {
        return <li key={fav.name} className="d-flex flex-row">
                    <Link to="/details" >
                        <button className="fav-item" onClick={() => actions.setDetails(fav.url)}>
                            {fav.name}
                        </button>
                    </Link>
                    <button className="bg-dark text-white" onClick={ () => actions.deleteFromFavorites(fav.name)} > x </button>
               </li>
        
    }) 

    return (
        <nav className="nav nav-masthead justify-content-center float-md-end">
          
              <Link className="nav-link text-white" to="/">Home</Link>
            
              <Link className="nav-link text-white" to="/people"> Characters</Link>
           
              <Link className="nav-link text-white" to="/vehicles">Vehicles</Link>
            
              <Link className="nav-link text-white" to="/planets">Planets</Link>
            
            <div className="dropdown">
                <button className="d-flex flex-row justify-content-between align-items-center btn btn-secondary dropdown-toggle nav-favs" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites <div className="mx-2 px-2 bg-dark rounded">{store.favorites.length}</div>
                </button>

                <ul className="mt-0 border border-2 px-3 dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    { favList}
                    <li><Link className="nav-link text-white go-to-favs" to="/favorites"> Acces favorites</Link></li>
                </ul>
                
            </div>
            
            
        </nav>
    )
}

export default Navbar