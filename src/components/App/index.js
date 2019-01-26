import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Main from "../Main";


class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Movies App</h1>
        </header>
        <Main/>
      </div>
    );
  }
}

export default Index;
