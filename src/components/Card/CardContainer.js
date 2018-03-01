import { connect } from "react-redux";
import Card from "./Card";
import { openCard } from "../../actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  openCard: (id) => dispatch(openCard(id)),
});

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
