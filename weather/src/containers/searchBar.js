import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form onSubmit={event => this.onFormSubmit(event)} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={(event) => { this.onInputChange(event); }}
        />
        <span>
          <button type="submit" className="btn btn-secondary">
Submit
          </button>
        </span>
      </form>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather }, dispatch);
// }
// export default connect(null, mapDispatchToProps )(SearchBar);
export default connect(null, { fetchWeather })(SearchBar);
