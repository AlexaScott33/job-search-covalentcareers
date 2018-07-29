import React, { Component } from 'react';
import List from './List';
// import logo from './logo.svg';
// import './App.css';

class FilterForm extends Component {
  render() {
    return (
      <div>
      <form>
          <label>Search</label>
          <input
          id="search_input"
          className="search_input"
          type="text"
          >
          </input>

          <br/>

          <label>Contract Type</label>
          <br/>
          <input
          type="checkbox"
          name="part_time_checkbox"
          // value
          >
          </input> Part-Time
          <br/>
          <input
          type="checkbox"
          name="full_time_checkbox"
          // value
          >
          </input> Full-Time
      </form>
      <List />
      </div>
    );
  }
}

export default FilterForm;