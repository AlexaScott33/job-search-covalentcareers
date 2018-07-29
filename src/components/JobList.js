import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class JobList extends Component {
  render() {
    console.log(this.props);
    const filteredBySearch = this.props.filteredList.map((job, index) => {
      return (
        <li key={index}>
        {job.organization}
        </li>
      )
    })
    return (
      <div>
      <ul>
        {filteredBySearch}
      </ul>

      </div>
    );
  }
}

export default JobList;