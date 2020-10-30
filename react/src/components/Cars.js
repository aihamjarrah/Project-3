import React, { Component } from 'react';
import Searchplate from "./SearchByPlate"
import Searchcolor from "./SearchByColor"
import Searchbycolor from './SearchByColor';
import Addcar from "./addCar"
export default class Cars extends Component {
  render() {
    const cars = this.props.cars
    return (
      <div className="cars">
        <h1></h1>
        <h1>Here you can find the car you need</h1>
        <Searchplate/>
        <Searchbycolor/>
        <Addcar addCar={this.props.addCar}/>
        <button onClick={this.props.getCars}>All Cars</button>
      </div>
    );
  }
}
