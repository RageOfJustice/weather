import React, {Component} from 'react';
import AjaxLoading from '../AjaxLoading';
import Day from '../Day';
import './MorePage.css';
// eslint-disable-next-line
import dateFormat from "date-format-lite";
import Refresh from "react-icons/lib/fa/refresh";

class MorePage extends Component{
	constructor(props){
		super(props);
		this.state = {
			lastUpdate: new Date(Date.now())
		}
		this.updateInfo = this.updateInfo.bind(this);
	}

	updateInfo(){
		this.props.getCityInfo(this.props.match.params.woeid);
		this.setState({
			lastUpdate: new Date(Date.now())
		})
	}

	render(){

		if(this.props.more.get("isFetching") || !this.props.more.hasIn(["cities", this.props.match.params.woeid])){
			return <AjaxLoading/>;
		}


		return(
			<div className="MorePage">
				<div className="MorePage-head">
					<h2 className="MorePage-header">{this.props.more.getIn(["cities", this.props.match.params.woeid, "parent", "title"])}</h2>
					<div className="MorePage-update">
						Last update in {this.state.lastUpdate.format("hh:mm:ss")} <button onClick={this.updateInfo} className="MorePage-refresh"><Refresh/></button>
					</div>
				</div>
				<div className="MorePage-body">
				{this.props.more.getIn(["cities", this.props.match.params.woeid, "consolidated_weather"]).valueSeq().map((val, key) => (
					<div key={key} className="MorePage-col"><Day  day={val} /></div>
				))}
					</div>
			</div>
		)
	}

	componentWillMount(){
		if(!this.props.more.hasIn(["cities", this.props.match.params.woeid])){
			this.updateInfo();
		}
	}
}

export default MorePage;
