import { connect } from "react-redux";
import GamePage from "./GamePage";
import { withRouter } from "react-router";
import { startGame, showAll, hideAll } from "../../actions";

const mapStateToProps = state => ({
  game: state.get("game")
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame()),
  showAll: () => dispatch(showAll()),
  hideAll: () => dispatch(hideAll()),
});

const GamePageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(GamePage));

export default GamePageContainer;
