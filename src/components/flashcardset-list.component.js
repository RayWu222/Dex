import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var axios = require('axios');

const FlashcardSet = props => (
    <tr>
        <td>{props.flashcardSet.title}</td>
        <td>{props.flashcardSet.author}</td>
        <td>{props.flashcardSet.description}</td>
        <td>{props.flashcardSet.category}</td>
        <td>{props.flashcardSet.numFlashcards}</td>
        <td>
            <Link to={"/edit/"+props.flashcardSet._id}>Edit</Link>
        </td>
    </tr>
)

export default class FlashcardSetList extends Component {

    constructor(props) {
        super(props);
        this.state = {flashcardSet: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/list')
        .then(response => {
            this.setState({ flashcardSet: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }

    flashcardSetList() {
        return this.state.flashcardSet.map(function(currentFlashcardSet, i){
            return <FlashcardSet flashcardSet={currentFlashcardSet} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>FlashcardSet List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th># of Flashcards</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.flashcardSetList() }
                    </tbody>
                </table>
            </div>
        )
    }
}