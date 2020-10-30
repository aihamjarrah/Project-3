import React, { Component } from 'react';

export default class Searchplate extends Component {
  render() {
    return (
      <div className="searchPlate">
        <h3>Search for cars by the plate number here.</h3>
        <input type="text" placeholder="Enter  plate number "/>
        <button>Search</button>
      </div>
    );
  }
}
