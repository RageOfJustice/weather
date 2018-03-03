import { connect } from "react-redux";
import SearchPage from "./SearchPage";
import { fetchCities, addToFavorites } from "../../actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = state => ({
  search: state.getIn(["search", "cities"]),
  favorites: state.getIn(["favorites", "cities"])
});

const mapDispatchToProps = dispatch => ({
  searchCity: (cityName) => dispatch(fetchCities(cityName)),
  addToFavorites: (city) => dispatch(addToFavorites(city))
})

const SearchPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));

export default SearchPageContainer;
