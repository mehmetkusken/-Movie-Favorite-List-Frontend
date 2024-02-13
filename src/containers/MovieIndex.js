import { useEffect } from "react"
import { getMovies } from "../redux/actionCreators"
import { connect } from "react-redux"
import MovieCard from "../components/MovieCard"


function MovieIndex({getMovies , movies}){
   useEffect(() => {
   movies.length === 0 && getMovies();
  }, [movies])
  return <div className="movie-card">{movies.map(movie => <MovieCard {...movie} key={movie.id}/>)}
  </div>
} 


const mapStateToProps = (state) => {
   return{ movies: state.movies}}


export default connect(mapStateToProps, { getMovies })(MovieIndex)