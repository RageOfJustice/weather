import { connect } from "react-redux";
import EnterPage from "./EnterPage";
import { withRouter } from "react-router";

const mapStateToProps = state => ({
  score: state.getIn(["game", "score"]),
  start: false
});

const EnterPageContainer = withRouter(connect(mapStateToProps)(EnterPage));

export default EnterPageContainer;
