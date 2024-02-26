import { useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteFavorite, getFavorites } from '../redux/actionCreators'
import FavoriteCard from '../components/FavoriteCard';


function Favorites(props){
   
useEffect(() => {
    props.getFavorites();
}, []);

    return <div className="favorites">
        
        {props.favorites.map(favorite => <FavoriteCard onDeleteFavorite={props.deleteFavorite} {...favorite} key={favorite.id}/>)}
    </div>
}
const mapStateToProps = (state) => ({ favorites: state.favorites})

export default connect(mapStateToProps,{getFavorites,deleteFavorite})(Favorites)