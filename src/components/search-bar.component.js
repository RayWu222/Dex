import React, { Component } from 'react';
import "../App.css";


//Take user input from the input field, validate and hand off to seach.component.
export default class SearchBar extends Component{

    //create an array for the search results
    constructor(props){
        super(props);
        this.state = {searchResult: [], searchTerm: " error", instanceID: 0};
    }

    getSearch(){
        var terms = document.getElementById("search-input-field").value;
        //this.setState({ searchTerm: terms});
        console.log("searchTerm: " + terms);
        window.location.replace("http://localhost:3000/flashcardSet/search/search?flashcardSet_title=" + terms);
        
    }

    onSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div className="search-bar-container">
                <input className="search-input-field" id="search-input-field" placeholder={this.state.testProp}></input>
                <button className="search-submit-button" type="submit" onClick = {this.getSearch}>Submit</button>
            </div>
        )
    }
    


}