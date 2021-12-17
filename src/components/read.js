import React, {Component} from 'react';
import Cars from './cars';
import axios from 'axios';

//Read Class Extending Component
class Read extends Component {   

    constructor(){
        super()

        this.ReloadData = this.ReloadData.bind(this);
    }
    state ={
        cars:[ ]  
    };

    //retrives the unique ID
    componentDidMount(){
        axios.get('http://localhost:4000/api/cars')
        .then((response)=>{
            this.setState({cars: response.data})
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    //Reloads the data after an update 
    ReloadData(){
        axios.get('http://localhost:4000/api/cars')
        .then((response)=>{
            this.setState({cars: response.data})
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    //outputs to the screen
    render() {
        return(
        <div>
            <h1>Cars for Sale</h1>
            <Cars cars={this.state.cars} ReloadData={this.ReloadData}></Cars>
        </div>
        );
    }
}
export default Read;