import React, { Component } from 'react';


//Take user input from the input field, validate and hand off to seach.component.
export default class SearchBar extends Component{

    //create an array for the search results
    constructor(props){
        super(props);
        this.state = {searchResult: []};
    }

    getSearch(){
        //var search = document.getElementsByName("Test");
        var searchValue = document.getElementById("search-bar-input").value;
        console.log(searchValue);
        //window.location.replace("http://localhost:3000/flashcardSet/search/" + searchValue)
        window.location.replace("http://localhost:3000/flashcardSet/search/search?flashcardSet_title=" + searchValue)
        
    }

    onSubmit(e){
        e.preventDefault();

    }


    render(){
        return(
            <div id="search-bar-container">
                <input id="search-bar-input" placeholder="Search"></input>
                <button id="search-bar-submit" type="submit" onClick = {this.getSearch}>Submit</button>
            </div>
        )
    }
    


}