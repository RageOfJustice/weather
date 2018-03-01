import React, {Component} from 'react';
import classnames from 'classnames';
import back from './Cards/back.png';
import './Card.css';


class Card extends Component{
	constructor(props){
		super(props);
		this.state = {
			image: require(`./Cards/${props.card.get("value")}.png`)
		}
		this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(){
		const {card} = this.props;
		if(!(card.get("opened") || card.get("hidden"))) this.props.openCard(card.get("id"));
	}

	render(){
		const {card} = this.props;
		return(
			<div onClick={this._handleClick} className={classnames("Card-wrapper", {"show": card.get("opened"), "hidden": card.get("hidden")})}>
				<div className="Card">
					<div className="Card-front">
							<img src={back} alt=""/>
					</div>
					<div className="Card-back">
						<img src={this.state.image} alt=""/>
					</div>
				</div>
			</div>
		)
	}

	componentWillReceiveProps(next){
		if(this.props.card.get("value") !== next.card.get("value"))
			this.setState({
				image: require(`./Cards/${next.card.get("value")}.png`)
			});
			this.forceUpdate();// из-за анимации. чтобы не показывалось обновление карты пользователю
	}
}

export default Card;
