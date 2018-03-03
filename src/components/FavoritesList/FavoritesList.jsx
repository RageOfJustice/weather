import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './FavoritesList.css';
import Bomb from "react-icons/lib/fa/bomb";

class FavoritesList extends Component{
	render(){
		if(!(this.props.favorites && this.props.favorites.count())) return null;
		return(
			<div className="FavoritesList-wrapper">
				<ul className="FavoritesList">
					{this.props.favorites.valueSeq().map((val, key) => (
						<li className="FavoritesList-item" key={key}>
							<Link to={`/more/${val.get("woeid")}`} className="FavoritesList-link">{val.get("title")}</Link>
							<button
								onClick={(e) => this.props.removeFromFavorites(val)}
								title="Remove from favorites"
								className="FavoritesList-from-favorites">
								<Bomb/>
							</button>
						</li>
					))}
				</ul>
			</div>
		)
	}

}

export default FavoritesList;
