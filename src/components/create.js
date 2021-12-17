import React, { Component } from 'react';
import axios from 'axios';

//Create Class Extending Component
class Create extends Component {

    constructor() {
        super();

        //Binding the events
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeKm = this.onChangeKm.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Make: '',
            Model: '',
            Year: '',
            Km: '',
            Price: '',
            Poster: ''
        }
    }

    //Input METHODS for MAKE MODEL YEAR KM PRICE POSTER
    onChangeMake(e) {
        this.setState({
            Make: e.target.value
        });
    }

    onChangeModel(e){
        this.setState({
            Model: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangeKm(e){
        this.setState({
            Km: e.target.value
        });
    }

    onChangePrice(e){
         this.setState({
             Price: e.target.value
         });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    //Button Submission Method
    onSubmit(e) {
        e.preventDefault();
        alert("Car: " + this.state.Make +this.state.Model + this.state.Year + this.state.Km + this.state.Price + this.state.Poster);

        //Server Reads them as this in small letter
        const newCar = {
            make: this.state.Make,
            model: this.state.Model,
            year: this.state.Year,
            km: this.state.Km,
            price: this.state.Price,
            poster: this.state.Poster
        }
        //Axios Posting to localhost 4000
        axios.post('http://localhost:4000/api/cars',newCar)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });

    }

    //Input Box
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    {/* MAKE INPUT BOX */}
                    <div className="form-group">
                        <label>Enter Car's Make: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Make}
                            onChange={this.onChangeMake}></input>
                    </div>
                    {/* MODEL INPUT BOX */}
                    <div className="form-group">
                        <label>Enter Car's Model: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Model}
                            onChange={this.onChangeModel}></input>
                    </div>
                    {/* YEAR INPUT BOX */}
                    <div className="form-group">
                        <label>Enter Car's Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    {/* KM INPUT BOX */}
                    <div className="form-group">
                        <label>Enter Car's KM: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Km}
                            onChange={this.onChangeKm}></input>
                    </div>
                    {/* Price INPUT BOX */}
                     <div className="form-group">
                        <label>Enter Car's Price: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Price}
                            onChange={this.onChangePrice}></input>
                    </div> 
                    {/* Poster INPUT BOX */}
                    <div className="form-group">
                        <label>Enter Picture of the Car: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}></textarea>
                    </div>


                    <div className='from-group'>
                        <input type='submit'
                            value='Add Car'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;