import React, {Component} from 'react';
// eslint-disable-next-line
import dateFormat from "date-format-lite";
import './Day.css';

class Day extends Component{

	constructor(props){
		super(props);
		this.state = {
			date: new Date(props.day.get("applicable_date")),
			now: new Date(Date.now())
		}
	}

	render(){
		const {day} = this.props;
		let header;
		switch(this.state.date.getDate()){
			case this.state.now.getDate() -1: header = "Yesterday"; break;
			case this.state.now.getDate(): header = "Today"; break;
			case this.state.now.getDate() + 1: header = "Tomorrow"; break;
			default:
				header = this.state.date.format("MMMM D DDDD");
		}
		return(
			<div className="Day">
				<h3 className="Day-header">{header}</h3>
				<div className="Day-row">
					<div className="Day-property">{day.get("weather_state_name")}</div>
					<div className="Day-value"><img className="Day-img" alt="" src={`https://www.metaweather.com/static/img/weather/${day.get("weather_state_abbr")}.svg`}/></div>
				</div>
				<div className="Day-row">
					<div className="Day-property">Temperature</div>
					<div className="Day-value">{Math.round(day.get("the_temp"))} &deg;C</div>
				</div>
				<div className="Day-row">
					<div className="Day-property">Air pressure</div>
					<div className="Day-value">{Math.round(day.get("air_pressure"))} mbar</div>
				</div>
				<div className="Day-row">
					<div className="Day-property">Wind speed</div>
					<div className="Day-value">{Math.round(day.get("wind_speed"))} mph</div>
				</div>
				<div className="Day-row">
					<div className="Day-property">Wind direction</div>
					<div className="Day-value">{Math.round(day.get("wind_direction"))}&deg;</div>
				</div>
			</div>
		)
	}
}



export default Day;
