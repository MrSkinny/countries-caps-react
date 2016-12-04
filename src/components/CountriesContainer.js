import React, { Component } from 'react';

import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

class CountriesContainer extends Component {
  state = { countries: [] }

  componentDidMount() {
    fetch('http://api.geonames.org/countryInfoJSON?username=rich_thinkful')
      .then(data => data.json())
      .then(data => this.setState({ countries: data.geonames }))
      .catch(err => console.error(err));
  }
  
  render() {
    const { params } = this.props;

    if (params.countryCode) return (
      <CountryDetail 
        country={this.state.countries.find(c => c.countryCode === params.countryCode)} 
      />
    );

    return <CountryList countries={this.state.countries} />;
  }
}

export default CountriesContainer;
