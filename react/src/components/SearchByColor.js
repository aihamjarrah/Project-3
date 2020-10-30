import React, { Component } from 'react';

export default class Searchbycolor extends Component {
  render() {
    return (
      <div className="searchByColor">
        <h3>The color of the car gives an advantage, enter the color you love, and we got you.</h3>
        <input type="text" placeholder="Enter the color here"/>
        <button>Search</button>
      </div>
    );
  }
}
