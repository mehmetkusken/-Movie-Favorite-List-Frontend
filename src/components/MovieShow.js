import { useParams } from "react-router"
import { getMovie , clearMovie } from "../redux/actionCreators"
import { connect } from "react-redux"
import { useEffect } from "react"



function MovieShow({getMovie, id,title,year,genre,plot,poster,rating , clearMovie}){

    const routeId = useParams().id
    
    useEffect(() => { getMovie(routeId) 
                    return clearMovie}, [getMovie,routeId , clearMovie])
    
  
  return <div className="center">
        <p><img src={poster} /></p>
        <p>Title:{title}</p>
        <p>Year:{year}</p>
        <p>Genre:{genre}</p>
        <p>Plot:{plot}</p>
        <p>IMDB:{rating}</p>
        </div>
    }

const mapStateToProps = (state) => {
    return{...state.selectedMovie}}


export default connect(mapStateToProps, { getMovie , clearMovie})(MovieShow)