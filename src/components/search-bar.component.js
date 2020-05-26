import React, { Component } from 'react';
import "../App.css";


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

    testFunction(){
        return alert("test alert")
    }

    render(){
        return(
            <div class="navbar-search">
                <input class="navbar-form" placeholder="Search"></input>
                <button class="navbar-submit" type="submit" onClick = {this.getSearch}>Submit</button>
            </div>
        )
    }
    


}