import React, {Component} from 'react';
import './FavoritesPage.css';
import Search from '../Search';
import FavoritesList from '../FavoritesList';

class FavoritesPage extends Component{
	render(){
		return(
			<div className="FavoritesPage">
				<Search onInput={this.props.filterFavorites}/>
				<FavoritesList favorites={this.props.favorites} removeFromFavorites={this.props.removeFromFavorites} />
			</div>
		)
	}
}

export default FavoritesPage;
