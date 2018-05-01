import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props);
        this.message = "Hello from the note components!";
    }

    render(props){
        return (
            <div>
                <h1>{this.message}</h1>
            </div>
        )
    }
}

export default Note;