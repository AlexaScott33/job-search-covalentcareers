import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobs';
import Filters from './Filters';
// import logo from './logo.svg';
// import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }
  render() {
    console.log(this.props.data);
    return (
      <div>
      <Filters />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect (mapStateToProps)(App);
