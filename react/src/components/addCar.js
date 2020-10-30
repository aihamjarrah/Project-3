import React, { Component } from 'react';
import axios from "axios"
export default class AddCar extends Component {
  componentDidMount(){
    console.log("THIS",this)
    this.getAllCars()

  }
  
  render() {
    
    

    return (
      <div className="addCar">
          <h2>Add a Car</h2>
          <input type="text" placeholder="Add Color"/>
          <input type="text" placeholder="Add Plate"/>
          <input type="text" placeholder="Add Type"/>
          <input type="text" placeholder="Add Engine"/>
          <input type="text" placeholder="Add Model"/>
          <input type="number" placeholder="Add Year"/>
          <button onClick={this.props.addCar}>Add</button>


      </div>
    );
  }
}
