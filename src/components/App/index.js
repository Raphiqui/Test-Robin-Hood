import React, {Component} from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Row, Col} from 'react-bootstrap';
import Main from '../Main';
import Footer from '../Footer';

class Index extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Row className="show-grid">
						<Col xs={12} md={8}>
							<h1>Movies App</h1>
						</Col>
						<Col xs={6} md={4}>
							<a className="babare" href="/">Home</a>
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
