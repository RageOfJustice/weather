import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classnames from 'classnames';
import './SearchList.css';
import Star from "react-icons/lib/fa/star";


class SearchList extends Component{
	render(){
		if(!(this.props.search && this.props.search.count())) return null;
		return(
			<div className="SearchList-wrapper">
				<ul className="SearchList">
					{this.props.search.valueSeq().map((val, key) => (
						<li className="SearchList-item" key={key}>
							<Link to={`/more/${val.get("woeid")}`} className="SearchList-link">{val.get("title")}</Link>
							<button
								onClick={(e) => this.props.addToFavorites(val)}
								title="Add to favorites"
								className={classnames("SearchList-to-favorites", {"_disabled": this.props.favorites.includes(val)})}>
								<Star/>
							</button>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default SearchList;
