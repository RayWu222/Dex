import React, { Component } from "react";
import "../App.css";
const search = ("")
//A compnent to take user input from the input field, validate and hand off to seach.component.
export default class SearchBar extends Component {
  //create an array for the search results
  constructor(props) {
    super(props);
    this.state = { searchResult: [], searchTerm: " error", instanceID: 0 };
  }

  
 
    handleSearch = event => {
    event.preventDefault();
    const  isValid =this.validate();
    if (isValid){
    console.log(this.state);
  
 }
  
}

  getSearch() {
   var terms = document.getElementById("user-input").value;
    console.log("searchTerm: " + terms);
    //validation process starting
    if (terms.length>0){window.location.replace(
      "http://localhost:3000/flashcardSet/search/search?flashcardSet_title=" +
        terms);

    }
    else {alert("Search cannot be empty")}
  
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-bar-container">
        <input
            id="user-input"
            type="text"
            className="search-input-field"
            placeholder={this.state.testProp}
        ></input>
        <button
          className="search-submit-button"
          type="submit"
          onClick={this.getSearch}
        >
          Submit
        </button>
      </div>
    );
  }
}
