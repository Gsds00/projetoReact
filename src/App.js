import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

     const nome = 'Gabriel'

     const url = 'https://via.placeholder.com/150'
  return (
<div className="App">
      <h2>aprendendo o jsx</h2>
        <p>ola {nome}</p>
        <img src={url} alt="Minha imagem"/>
</div>

  /*<Container style={{ height:1000}}>
       <Row>
        <Col style={{ flex: 1, backgroundColor: "red" }}>1 of 2</Col>
        <Col style={{ flex: 1, backgroundColor: "blue" }}>2 of 2</Col>
      </Row>
  </Container>*/
  );
}



export default App;
