import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios"


import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SearchPage from "./components/search.component";
import SignIn from "./components/signin.component";
import SignUp from "./components/signin.component";
//The main application driver javascript

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        title: null,
        numFlashcardSets: null,
        flashcardSets: null,
        imageURL: ''
      }
    
  }

  render() {
    const { imageURL } = this.state;
    return (
      <div>
      <Router>
        <NavBar> </NavBar>
        <Route path="/" exact component={LandingPage} />
        <Route path="/list" exact component={FlashcardSetList} />
        <Route path="/flashcardSet/search/:search" exact component={SearchPage} />
        <Route path="/edit/:id" component={EditFlashcardSet} />
        <Route path="/create" exact component={CreateFlashcardSet} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <img src={imageURL} />
      </Router>
      
      </div>
    );
  }

  componentDidMount() {
    
  }
}

export default App;
