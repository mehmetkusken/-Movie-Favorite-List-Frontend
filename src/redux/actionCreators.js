export const getMovies = () => {
    return dispatch => fetch("http://[::1]:3000/movies")
    .then(res => res.json())
    .then(movies => dispatch({type: "GET_MOVIES", payload: movies}))
}

export const getMovie = (id) => {
    return dispatch => fetch(`http://[::1]:3000/movies/${id}`)
    .then(res => res.json())
    .then(movie => dispatch({type: "GET_MOVIE", payload: movie}))
}

export const clearMovie = () => ({type: "CLEAR_MOVIE"})

export const submitSignup = (user) => {
    return dispatch => fetch("http://[::1]:3000/users", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => renderResponse(res,dispatch))
    
   }
 
 export const submitLogin = (user) => {
    return dispatch => fetch("http://[::1]:3000/sessions",{
        method: "POST", 
        headers: {
            "Content-Type": 'application/json',
       },
        body: JSON.stringify(user),
       })
       .then(res => renderResponse(res,dispatch))       
   }

   function renderResponse(res,dispatch){
    { if(res.ok) {
        res.json()
        .then(response => {
           localStorage.token = response.token
           dispatch({type: "SET_USER", payload: response.user})
           
         })
       } else {
           res.json()
           .then(res => alert(res.errors))
       }
   }
  }

  export const autoLogin = () => {
    return dispatch => fetch("http://[::1]:3000/me", {
    headers: {
            'Authorization': localStorage.token
         }
    })
  
    .then(res => renderResponse(res,dispatch))
    }
    
  export const logout = () => {
        return dispatch => {
          localStorage.clear()
          dispatch({type: "LOGOUT"})
        }
    }
  

