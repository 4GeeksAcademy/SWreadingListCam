const getState = ({ getStore, getActions, setStore }) => {
    const baseUrl = 'https://swapi.dev/api'
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            charactersPage: 1,
            charactersNextPage: '',
            charactersPreviousPage: '',
            totalCharactersPages: 1,
            vehiclesPage: 1,
            vehiclesNextPage: '',
            vehiclesPreviousPage: '',
            totalVehiclesPages: 1,
            planetsPage: 1,
            planetsNextPage: '',
            planetsPreviousPage: '',
            totalPlanetsPages: 1,
            favorites: [],
            details: []
        },
        actions: {
            getCharacters: () => {
                fetch(`${baseUrl}/characters`)
                .then(data => data.json())
                .then(res => setStore({ characters: res.results, charactersNextPage: res.next, charactersPreviousPage: res.previous, totalCharactersPages: Math.floor(res.count / 10 + 1 )}))
            },
            getVehicles: () => {
                console.log(`${baseUrl}/vehicles/?page=${getStore().vehiclesPage}`)
                fetch(`${baseUrl}/vehicles/?page${getStore().vehiclesPage}`)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous, totalVehiclesPages: Math.floor(res.count / 10 + 1 )}))
            },
            getPlanets: () => {
                fetch(`${baseUrl}/planets`)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous, totalPlanetsPages: Math.floor(res.count / 10 + 1 )}))
            },
            nextVehiclesPage: () => {
                fetch(getStore().vehiclesNextPage)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous}))
            },
            previousVehiclesPage: () => {
                fetch(getStore().vehiclesPreviousPage)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous}))
            },
            setVehiclesPage: (page)=> {
                fetch(`${baseUrl}/vehicles/?page=${page}`)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous}))
            },
            nextCharactersPage: () => {
                fetch(getStore().charactersNextPage)
                .then(data => data.json())
                .then(res => setStore({ characters: res.results, charactersNextPage: res.next, charactersPreviousPage: res.previous}))
            },
            previousCharactersPage: () => {
                fetch(getStore().charactersPreviousPage)
                .then(data => data.json())
                .then(res => setStore({ characters: res.results, charactersNextPage: res.next, charactersPreviousPage: res.previous}))
            },
            setCharactersPage: (page)=> {
                fetch(`${baseUrl}/characters/?page=${page}`)
                .then(data => data.json())
                .then(res => setStore({ characters: res.results, charactersNextPage: res.next, charactersPreviousPage: res.previous}))
            },
            nextPlanetsPage: () => {
                fetch(getStore().planetsNextPage)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous}))
            },
            previousPlanetsPage: () => {
                fetch(getStore().planetsPreviousPage)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous}))
            },
            setPlanetsPage: (page)=> {
                fetch(`${baseUrl}/planets/?page=${page}`)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous}))
            },
            setDetails: (url) => {
                fetch(url)
                .then(data => data.json())
                .then(res => setStore({ details: res }))
            },

           
            addToFavorites: (name, url) => {
                let newObj = { name: name, url: url}
                setStore({favorites: getStore().favorites.concat(newObj)})
                console.log(getStore().favorites)
            },
            deleteFromFavorites: (name) => {
                let newObj = getStore().favorites.filter( (fav) => fav.name !== name)
                setStore({favorites: newObj})
            }

        }
    };
};

export default getState;