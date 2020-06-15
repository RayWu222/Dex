import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';



const UserFlashcardSetList = props => (
    <tr>
        <td>{props.userFlashcardSetList.title}</td>
        <td>{props.userFlashcardSetList.author}</td>
        <td>{props.userFlashcardSetList.description}</td>
        <td>{props.userFlashcardSetList.category}</td>
        <td>
        <Link to={"/edit/"+props.userFlashcardSetList._id}>Go</Link> | <Link to={"/edit/"+props.userFlashcardSetList._id}>Edit</Link> | <Link to={"/edit/"+props.userFlashcardSetList._id}>Delete</Link>
        </td>
    </tr>
)

export default class UserCardSetsList extends Component{
    constructor(props) {
        super(props);
        this.state = {userFlashcardSetList: []};
    }
    
    
    //Put the result in a list
    userFlashCardSetList() {
        return this.state.userFlashcardSetList.map(function(currentFlashcardSet, i){
            return <UserFlashcardSetList userFlashcardSetList={currentFlashcardSet} key={i} />;
        })
    }

    
    componentDidMount() {
 
        // console.log(JSON.stringify(this.props.location.search))
        // let value = JSON.stringify(this.props.location.search);
        // var n;
        // value = value.split('=').pop();
        // value = value.substring(0, value.length-1);
        // if(value === ""){
        //     value = "empty";
        // }
        // if(value.indexOf('%20') > -1){
        //     n = value.replace('%20', ' ')
        // }
        // console.log("value " + n)
       
        
        axios.get('http://localhost:4000/userList/FooBar'  )
        
            .then(response => {
                console.log(response.data);
                this.setState({ userFlashcardSetList: response.data });
                console.log("User Flashcards Set " + this.userFlashCardSetList);
            })
            .catch(function (error){
                console.log(error);
            })
    }
    

    

    render(){
        return(
            <div>
                
            <h3>Flashcard Sets</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.userFlashCardSetList }
                </tbody>
            </table>
        </div>


            
                
               
        )
    }
}