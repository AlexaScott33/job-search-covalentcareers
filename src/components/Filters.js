import React, { Component } from 'react';
import FilterForm from './FilterForm';


class Filters extends Component {
  render() {
    return (
      <div>
        <FilterForm jobData={this.props.jobs} />
      </div>
    );
  }
}

export default Filters;