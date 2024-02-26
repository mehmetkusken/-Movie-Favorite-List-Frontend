import { connect } from 'react-redux'
import React, {useState , useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { deleteFavorite } from '../redux/actionCreators';





function FavoriteCard({id, user, movie , username ,onDeleteFavorite}){
 
       
    return  <div className="movie-card">
    <p className = "title">{movie.id}. {movie.title}</p>
    <img src={movie.poster} className="image-src"/>
    <p>Year : {movie.year}</p>
    <p>Genre : {movie.genre}</p>
    <p>Rating : {movie.rating}</p>
    <p>Description : {movie.plot}</p>
    <button className="tiny ui button violet"  onClick={(event) => onDeleteFavorite(id)}>Delete</button>   </div>
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps)(FavoriteCard);