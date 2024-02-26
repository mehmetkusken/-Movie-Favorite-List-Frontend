const initialMovie = {
    id:0,
    title:"",
    year:0,
    genre:"",
    plot:"",
    poster:"",
    rating:0,
}


const initialUser = {
    username: ""
  }

const initialState = {
    movies: [],
    selectedMovie: initialMovie,
    user: initialUser,
    favorites: [],
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_MOVIES":
            return {...state, movies: action.payload};
        case "GET_MOVIE":
            return {...state, selectedMovie: action.payload};
        case "ADD_FAVORITE":
            return {...state, favorite: action.payload};
        case "GET_FAVORITES":
            return {...state, favorites: action.payload};
        case "SET_USER":
            return {...state, user: action.payload};
        case "DELETE_FAVORITE":
            let newFavorit = state.favorites.filter(function (element, index) {
            return element.id !== action.payload
            }); 
            return {...state, favorites: newFavorit};
        case "LOGOUT":
            return {...state, user: initialUser};
        default:
            return{...state}
            
    }
}