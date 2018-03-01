import React, { Component } from 'react';
import PropTypes from 'prop-types';
import startGame from './assets/StartGame.png';
import endGame from './assets/EndGame.png';
import Button from '../Button';
import './EnterPage.css'

class EnterPage extends Component{
  static defaultProps = {
    start: true,
  }
  static propTypes = {
    start: PropTypes.bool,
  }
  render(){
    const isStart = this.props.start;
    let img, header;
    if(isStart){
      img = <img src={startGame} alt="Карточная игра, развивающая память"/>;
      header = <h1 className="EnterPage-header">Memory game</h1>;
    } else {
      img = <img src={endGame} alt="конец игры"/>;
      header = <h1 className="EnterPage-results">Поздравляем!<br/>Ваш итоговый счет: {this.props.score}</h1>;
    }

    return (
      <div className="EnterPage">
        <div className="EnterPage-title">
          {img}
        </div>
        {header}
        <Button to="/game" tagType="link">{isStart ? "Начать игру" : "Еще раз"}</Button>
      </div>
    )
  }
}


export default EnterPage;
