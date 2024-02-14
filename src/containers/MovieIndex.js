import { useEffect } from "react"
import { getMovies } from "../redux/actionCreators"
import { connect } from "react-redux"
import MovieCard from "../components/MovieCard"



function MovieIndex({getMovies , movies}){
   useEffect(() => 
   (getMovies)
  , [getMovies])
  return <div className="movie">{movies.map(movie => <MovieCard {...movie} key={movie.id}/>)}
  </div>
} 


const mapStateToProps = (state) => {
   return{ movies: state.movies}}


export default connect(mapStateToProps, { getMovies })(MovieIndex)