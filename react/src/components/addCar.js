import React, { Component } from 'react';
import axios from "axios"
export default class AddCar extends Component {
  
  
  
  render() {
    const {getAllCars,addCar,onChange} =this.props
    
    

    return (
      <div className="addCar">
          <h2>Add a Car</h2>
          <input type="text" placeholder="Add Color" onChange={onChange}/>
          <input type="text" placeholder="Add Plate" onChange={onChange}/>
          <input type="text" placeholder="Add Type" onChange={onChange}/>
          <input type="text" placeholder="Add Engine" onChange={onChange}/>
          <input type="text" placeholder="Add Model" onChange={onChange}/>
          <input type="number" placeholder="Add Year" onChange={onChange}/>
          <button onClick={this.props.addCar}>Add</button>


      </div>
    );
  }
}
