import React, {Component} from 'react';
import Card from '../Card';
import './Board.css';

class Board extends Component{

	render(){
		return(
			<div className="Board">
				{this.props.game.get("currentDeck").valueSeq().map((val, key) => {
					return (<div key={key} className="Board-card"><Card card={val}/></div>)
				})}
			</div>
		)
	}
}

export default Board;
