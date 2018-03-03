import React, {Component} from 'react';
import './SearchPage.css';
import Search from '../Search';
import SearchList from '../SearchList';

class SearchPage extends Component{
	render(){
		return(
			<div className="SearchPage">
				<Search onInput={this.props.searchCity}/>
				<SearchList search={this.props.search} favorites={this.props.favorites} addToFavorites={this.props.addToFavorites} />
			</div>
		)
	}

}

export default SearchPage;
