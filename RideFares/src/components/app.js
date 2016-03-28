import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import EstimatesList from '../containers/estimates_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <EstimatesList />
      </div>
    );
  }
}
