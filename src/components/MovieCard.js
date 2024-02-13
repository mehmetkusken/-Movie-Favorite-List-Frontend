export default function MovieCard({id,title,year,genre,plot,poster,rating}){
    return  <div className="movie-card">
    <p className = "title">{id}. {title}</p>
    <img src={poster} className="image-src"/>
    <p>Year : {year}</p>
    <p>Genre : {genre}</p>
    <p>Rating : {rating}</p>
    <p>Description : {plot}</p>
   </div>
}