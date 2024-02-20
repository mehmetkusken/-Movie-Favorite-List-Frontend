import { Link } from "react-router-dom"



export default function MovieCard({id,title,year,genre,plot,poster,rating}){
    return  <div className="movie-card">
   <Link to={`/movies/${id}`}><p className = "title">{id}. {title}</p></Link>
   <Link to={`/movies/${id}`}> <img src={poster} className="image-src"/></Link>
    <p>Year : {year}</p>
    <p>Genre : {genre}</p>
    <p>Rating : {rating}</p>
    <p>Description : {plot}</p>
   </div>
}