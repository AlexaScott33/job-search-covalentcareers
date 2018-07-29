import React, { Component } from 'react';
import SearchFilter from './SearchFilter';
import ContractFilter from './ContractFilter';
// import logo from './logo.svg';
// import './App.css';

class Filters extends Component {
  render() {
    return (
      <div>
      This is the FIlters Component
      <SearchFilter />
      <ContractFilter />
      </div>
    );
  }
}

export default Filters;