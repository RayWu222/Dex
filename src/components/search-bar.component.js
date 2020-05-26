import React, { Component } from 'react';
import axios from 'axios';
import "./App.css";


//Grab the 
export default class SearchBar extends Component{

    //create an array for the search results
    constructor(props){
        super(props);
        this.state = {searchResult: []};
    }



    onSubmit(e){
        e.preventDefault();

    }


    render(){
        return(
            <div>
                
            </div>
        )
    }
    


}