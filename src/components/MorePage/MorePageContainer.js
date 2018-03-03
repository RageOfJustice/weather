import { connect } from "react-redux";
import MorePage from "./MorePage";
import { fetchCity } from "../../actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = state => ({
  more: state.get("more"),
});

const mapDispatchToProps = dispatch => ({
  getCityInfo: (woeid) => dispatch(fetchCity(woeid)),
})

const MorePageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(MorePage));

export default MorePageContainer;
