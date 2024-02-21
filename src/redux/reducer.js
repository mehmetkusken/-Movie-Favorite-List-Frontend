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

}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_MOVIES":
            return {...state, movies: action.payload};
        case "GET_MOVIE":
            return {...state, selectedMovie: action.payload};
        case "CLEAR_MOVIE":
            return {...state, selectedMovie: initialMovie};
        case "SET_USER":
            return {...state, user: action.payload};
        case "LOGOUT":
            return {...state, user: initialUser};
        default:
            return{...state}
            
    }
}