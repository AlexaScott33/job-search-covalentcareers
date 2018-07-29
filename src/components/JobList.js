import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class JobList extends Component {
  render() {
    console.log(this.props);
    const filteredBySearch = this.props.filteredList.map((job, index) => {
      return (
        <li key={index}>
        {job.job_title} - {job.contract_type} <br/>
        {job.organization} in {job.location}
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