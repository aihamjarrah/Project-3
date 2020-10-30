import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cars from "./components/Cars";
import About from "./components/about";
import AddCar from "./components/addCar"
import axios from 'axios';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn:false,
      Color: "Black",
      Plate: "12-93822",
      type:"Mercedes",
      engine:"2000cc",
      model: "S200",
      year:2017
      

    }
  }
  getAllCars=()=>{
    axios
       .get("http://localhost:3001/cars")
       .then((response)=>{
         console.log("Response",response)
         this.setState({cars:response.data})
       })
       .catch((err)=>{
         console.log("Result",err)
       })
  }
  addCar= (carInfo)=>{
    axios
         .post("http://localhost:3001/add-car")
         .then((response)=>{
           if(response.data ==="Login first"){
             this.setState({isLoggedIn:false})
           }
           else{
             this.setState({:carInfo})
           }

  
         })
         .catch((err)=>{
           console.log("RESULT",err)
         })
  
      
  }
  carColor=()=>{
    const carInfo = this.onChange()
    return carInfo

  }
  carPlate=()=>{
    const carInfo = this.onChange()
    return carInfo

  }
  carEngine=()=>{
    const carInfo = this.onChange()
    return carInfo

  }
  carType=()=>{
    const carInfo = this.onChange()
    return carInfo

  }
  carModel=()=>{
    const carInfo = this.onChange()
    return carInfo

  }
  carYear=()=>{
    const carInfo = this.onChange()
    return carInfo

  }
  onChange=(e)=>{
    const carInfo = e.target.value
    return carInfo
    

    
    
  }

  
  
    getAllUsers=()=>{
      axios
           .get("http://localhost:3001/users")
           .then((response)=>{
             if(response.status!==200){
               console.log("You need to login in first")
               this.setState({isLoggedIn:false})
  
               
             }
             else{
               console.log("Access granted")
               this.setState({isLoggedIn:true})
             }
           })
           .catch((err)=>{
             console.log("Result",err)
           })
    }
  


  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="navBar">
                <li>
                  <Link to="/">Home</Link>
                </li> ||&nbsp;
               
                <li>
                  <Link to="/cars">Cars</Link>
                </li> ||&nbsp;
                <li>
                  <Link to="/about">About</Link>
                </li>
            </ul>
          </nav>
          <Route exact path="/">
            {this.state.isLoggedIn ? <Home/> :<Home />}
          </Route>
          <Route exact path="/cars">
            <Cars getCars={this.getAllCars} cars={this.state.cars} addCar={this.addCar}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/add-car">
            {this.state.isLoggedIn? <AddCar getAllCars={this.getAllCars} addCar={this.addCar} onChange={this.onChange}/> :<p>You need to login in first</p>}
            
          </Route>
        </div>
      </Router>
    );
  }
}
