export const getMovies = () => {
    return dispatch => fetch("http://[::1]:3000/movies")
    .then(res => res.json())
    .then(movies => dispatch({type: "GET_MOVIES", payload: movies}))


}

