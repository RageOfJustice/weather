import { connect } from "react-redux";
import SearchPage from "./FavoritesPage";
import { filterFavorites, removeFromFavorites } from "../../actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = state => ({
  favorites: state.getIn(["favorites", "filtered"])
});

const mapDispatchToProps = dispatch => ({
  filterFavorites: (cityName) => dispatch(filterFavorites(cityName)),
  removeFromFavorites: (city) => dispatch(removeFromFavorites(city)),
})

const SearchPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));

export default SearchPageContainer;
