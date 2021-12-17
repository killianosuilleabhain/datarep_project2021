import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//App Class Extending Component
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Catalog</Nav.Link>
              <Nav.Link href="/create">Add</Nav.Link>
              
              {/* Attempt at a Search Bar */}
              <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>
        
        {/* Switches for the Navbar */}
        <Switch>
        <Route path="/" exact><Content /></Route>
          <Route path = "/create"><Create></Create></Route>
          <Route path = "/read"><Read></Read></Route>
          <Route path ='/edit/:id' component={Edit}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
