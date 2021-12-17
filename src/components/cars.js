import React, {Component} from 'react';
import CarItem from './caritem';

//Create Class Extending Component
class Cars extends Component {   

    render() {
        return this.props.cars.map( (car) =>{
            return <CarItem car={car} ReloadData={this.props.ReloadData}></CarItem>
        })
    }
}
export default Cars;