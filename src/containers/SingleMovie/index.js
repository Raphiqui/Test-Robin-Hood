import React, { Component } from 'react';

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
            <div>
                <p>Name - {this.state.name}</p>
                <p>Language - {this.state.language}</p>
                <p>Type - {this.state.type}</p>
                <p>Status - {this.state.status}</p>
                <p>
                    <img alt="Show" src = {this.state.image} />
                </p>
                <p>Single Movies - the show id will be {this.props.match.params.id} </p>
            </div>
        )
    }
}

export default SingleMovie;