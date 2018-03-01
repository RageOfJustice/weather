import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import './Button.css';

class Button extends Component{
	static defaultProps = {
		color: "white",
	}
	static porpTypes = {
		tagType: PropTypes.string,
		color: PropTypes.string,
		onClick: PropTypes.func
	}
	render(){

		const className = classnames("Button", {"Button-white": this.props.color === "white"});

		switch (this.props.tagType){
			case "link":
			return (<Link className={className} to={this.props.to}>{this.props.children}</Link>);
			case "a":
			return (<a onClick={this.props.onClick} className={className} href={this.props.href}>{this.props.children}</a>);
			case "button":
			return (<button onClick={this.props.onClick} className={className} type={this.props.type}>{this.props.children}</button>);
			case "input":
			return (<input onClick={this.props.onClick} className={className} type={this.props.type} value={this.props.value} />);
			default:
			return (<button onClick={this.props.onClick} className={className} type={this.props.type}>{this.props.children}</button>);
		}
	}
}

export default Button;
