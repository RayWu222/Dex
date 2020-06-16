import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';





const FlashcardSetList = props => (
    <tr>
        <td>{props.flashcardSetList.title}</td>
        <td>{props.flashcardSetList.author}</td>
        <td>{props.flashcardSetList.description}</td>
        <td>{props.flashcardSetList.category}</td>
        <td>{props.flashcardSetList.numFlashcards}</td>
        <td>
        <Link to={"/edit/"+props.flashcardSetList._id}>Go</Link> | <Link to={"/edit/"+props.flashcardSetList._id}>Edit</Link> | <Link to={"/deleteSet/"+props.flashcardSetList._id}>Delete</Link>
        </td>
    </tr>
)

export default class UserCardSetsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            flashcardSetList: []
        };
    }
    
    componentDidMount() {
 
           
        axios.get('http://localhost:4000/userList/'+ localStorage.getItem("UserInfoToken"))
        
            .then((response) => {
                console.log(response.data);
                this.setState({flashcardSetList: response.data});
                console.log("User Flashcards Set " + this.flashCardSetList);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    //Put the result in a list
    getFlashCardSetList() {
        return this.state.flashcardSetList.map(function(currentFlashcardSet, i){
            return <FlashcardSetList flashcardSetList={currentFlashcardSet} key={i} />;
        })
    }


    render(){
        return(
            <div>
            <hr></hr>
            <h3>Flashcard Sets</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Cards in Deck</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.getFlashCardSetList() }
                </tbody>
            </table>
        </div>


            
                
               
        )
    }
}