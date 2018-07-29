import React, { Component } from 'react';
import FilterForm from './FilterForm';
// import logo from './logo.svg';
// import './App.css';

class Filters extends Component {
  render() {
      //console.log(this.props.jobs)
    return (
      <div>
      <h4>Filters</h4>
      <FilterForm jobData={this.props.jobs} />
      </div>
    );
  }
}

export default Filters;