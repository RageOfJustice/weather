import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component{
	_handleInput(e){
		e.preventDefault();
		this.props.onInput(e.target.value);
	}

	static propTypes = {
		onInput: PropTypes.func.isRequired
	}

	render(){
		return(
			<div className="Search">
				<form onSubmit={this._handleInput.bind(this)} className="Search-form">
					<input onInput={this._handleInput.bind(this)} type="text" placeholder="Start typing to search cities" className="Search-input"/>
				</form>
			</div>
		)
	}
}

export default Search;
