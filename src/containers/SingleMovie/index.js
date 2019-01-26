import React, { Component } from 'react';
import './index.css'
import {Row, Col } from 'react-bootstrap';

class SingleMovie extends Component {
    state = {
        name: null,
        summary: null,
        language: null,
        type: null,
        image: null,
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(json => {
                const name = json.name;
                const summary = json.summary
                    .replace("<p>", " ")
                    .replace("</p>", " ")
                    .replace("<b>", " ")
                    .replace("</b>", " ");
                const language = json.language;
                const status = json.status;
                if (json.image !== null) {
                    const image = json.image.medium;
                    this.setState({ name, summary, language, status, image});
                }
                this.setState({ name, summary, language, status});
            });
    };

    render() {
        return (
            <div className="display-item">
                <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                        <p>
                            <img alt="" src = {this.state.image} />
                        </p>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <p>Name: {this.state.name}</p>
                        <p>Summary:</p>
                        {this.state.summary}
                        <p>Language: {this.state.language}</p>
                        <p>Status: {this.state.status}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SingleMovie;