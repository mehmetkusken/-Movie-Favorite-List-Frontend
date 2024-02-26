import { useParams } from "react-router"
import { getMovie , submitFavorite } from "../redux/actionCreators"
import { connect } from "react-redux"
import { useEffect } from "react"



function MovieShow({getMovie, id,title,year,genre,plot,poster,rating ,submitFavorite}){
    const routeId = useParams().id
    
    useEffect(() => {getMovie(routeId)}
    , [getMovie,routeId])

    const addToFavorite = (e) => {
      
        e.preventDefault()

        const newFavorite = {id}    
        submitFavorite(newFavorite)
                 
    }
    
  
  return <div className="center">
        <p><img src={poster} /></p>
        <p>Title:{title}</p>
        <p>Year:{year}</p>
        <p>Genre:{genre}</p>
        <p>Plot:{plot}</p>
        <p>IMDB:{rating}</p>

        <button onClick={addToFavorite}>Add to your Favorite List</button>
        </div>
    }

const mapStateToProps = (state) => {
    return{...state.selectedMovie}
    }

    


export default connect(mapStateToProps, { getMovie,submitFavorite})(MovieShow)