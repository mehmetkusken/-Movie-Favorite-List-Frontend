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

export const submitFavorite = (id) => {
      const movieid = id.id
        return dispatch => fetch("http://[::1]:3000/favorites", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
          },
          body: JSON.stringify({movie_id: movieid})
          
        })
        .then(res => {
            
          if (res.ok) {
            res.json().then(favorite => {
              dispatch({type: "ADD_FAVORITE", payload: favorite})
            })
          } else {
            res.json().then(res => alert(res.errors))
          }
        })
      }



  export const getFavorites = () => {
     return dispatch => fetch("http://[::1]:3000/favorites", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
          }
        })
        .then(res => res.json())
        .then(favorites => dispatch({type: "GET_FAVORITES", payload: favorites}))
        
      }
    
      const url = "http://[::1]:3000/"
  export const deleteFavorite = (id) => { 
    return dispatch => fetch(url + "favorites/" + id, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.token
            }, 
          })
          .then(res => dispatch({type: "DELETE_FAVORITE", payload: id}))
    }
  

