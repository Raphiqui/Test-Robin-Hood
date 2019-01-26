import React, { Component } from 'react';
import './index.css'
import {Row, Col } from 'react-bootstrap';

class SingleMovie extends Component {
    state = {
        name: null,
        language: null,
        type: null,
        status: null,
        image: null,
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(json => {
                const name = json.name;
                console.log(name);
                const language = json.language;
                const type = json.type;
                const status = json.status;
                if (json.image !== null) {
                    const image = json.image.medium;
                    this.setState({ name, language, type, status, image});
                }
                this.setState({ name, language, type, status});
            });
    };

    render() {
        return (
            <div className="display-item">
                <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                        <p>
                            <img alt="Show" src = {this.state.image} />
                        </p>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <p>Name: {this.state.name}</p>
                        <p>Language: {this.state.language}</p>
                        <p>Type: {this.state.type}</p>
                        <p>Status: {this.state.status}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SingleMovie;