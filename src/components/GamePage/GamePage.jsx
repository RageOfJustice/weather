import React, {Component} from 'react';
import './GamePage.css';
import Board from '../Board';

class GamePage extends Component{
	constructor(props){
		super(props);
		this.startNewGame = this.startNewGame.bind(this);
	}

	startNewGame(){
		this.props.startGame();
		this.props.showAll();
		setTimeout(() => this.props.hideAll(), 5 * 1000);
	}

	render(){
		return (<div className="GamePage">
			<div className="GamePage-controls">
				<button className="button-text GamePage-button" onClick={this.startNewGame}>Начать заново</button>
				<span className="GamePage-score">Очки: {this.props.game.get("score")}</span>
			</div>
			<Board game={this.props.game} />
		</div>)
	}

	componentDidMount(){
		this.startNewGame();
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.game.get("cardsLeft") <= 0){
			 this.props.history.push("/end");
		}
	}
}

export default GamePage;
