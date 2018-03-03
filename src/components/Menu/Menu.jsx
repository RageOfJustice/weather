import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';
import Search from 'react-icons/lib/fa/search';
import Star from 'react-icons/lib/fa/star-o';

class Menu extends Component{
	render(){
		return(
			<div className="Menu-wrapper">
				<div className="Menu-container">
					<nav className="Menu">
						<NavLink exact={true} activeClassName="_active" to="/" className="Menu-link"><Search/></NavLink>
						<NavLink exact={true} activeClassName="_active" to="/favorites" className="Menu-link"><Star/></NavLink>
					</nav>
				</div>
			</div>
		)
	}
}

export default Menu;
