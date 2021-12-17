import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Create Class Extending Component
class CarItem extends React.Component {   

    constructor(){
        super();

        this.DelteCar = this.DelteCar.bind(this);
    }

    //delete Method
    DelteCar(e){
        e.preventDefault();
        console.log("Delete: " +this.props.car._id);

        axios.delete("http://localhost:4000/api/cars/"+this.props.car._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    //Div to hold the display card  **Attempted to make them go across like a row but couldnt get it to work**
    render() {
        return(
        <div className ='rowContainer'>
            {/*Display*/}
            <Card style={{ width: '18rem'}} >
            <Card.Img variant="top" src={this.props.car.poster} />
            <Card.Body>
                <Card.Title>{this.props.car.make}</Card.Title>
                <Card.Title>{this.props.car.model}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Year: {this.props.car.year}</ListGroupItem>
                <ListGroupItem>Millage: {this.props.car.km}</ListGroupItem>
                <ListGroupItem>Price: {this.props.car.price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Link to={"/edit/"+ this.props.car._id} className="btn btn-primary">Update Details</Link>
                
                <Button variant="success" onClick={this.DelteCar}>Sold</Button>
            </Card.Body>
            </Card>
            <br></br>
        </div>

        );
    }
}
export default CarItem;