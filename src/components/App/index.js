import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Main from "../Main";
import Footer from "../Footer";
import { Row, Col } from 'react-bootstrap';


class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Row className="show-grid">
                <Col xs={12} md={8}>
                    <h1>My Movies App</h1>
                </Col>
                <Col xs={6} md={4}>
                    <a className="link" href="/">Home</a>
                </Col>
            </Row>
        </header>
        <Main/>
          <footer className="App-footer">
              <Footer/>
          </footer>
      </div>
    );
  }
}

export default Index;
