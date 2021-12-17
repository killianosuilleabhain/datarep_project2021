import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

//Content Class Extending Component
class Content extends Component {
    render() {
        return (
            <div>
                <h1>Killians Car Dealership</h1>

                {/* Image slider/Carousel */}
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS42SV0Co8q-YvErLzAv-C3cvoTEqIyb8PfA&usqp=CAU"
                            alt="First Slide"
                        />
                        <Carousel.Caption>
                            <h1 class="text-white-50">WELCOME</h1>
                            <p class="text-white-50">Irelands Biggest Car Seller</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDfF-fiDUwo6VaDg9vMBGKQRmAFUg-4hDOtg&usqp=CAU"
                            alt="Second slide"
                            style={{ maxWidth: '100rem'}}
                        />
                        <Carousel.Caption>
                            <h1 class="text-white-50">WELCOME</h1>
                            <p class="text-white-50">Irelands Biggest Car Seller</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVUZsgmagEetX7nPMSd2AAUBcPNnW1z62Cw&usqp=CAU"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 class="text-black">WELCOME</h1>
                            <p class="text-black">Irelands Biggest Car Seller</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Content;