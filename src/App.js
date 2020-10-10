import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios"


import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SignIn from "./components/signin-pack.component";
import SignOut from "./components/signout.component";
import Profile from "./components/profile.component";
import DeleteFlashcardSet from "./components/deleteCardSet.component";
import SearchPage from "./components/search.component";
import Footer from "./components/footer.component";


import Browse from  "./components/browseLink.component";
import Subject from "./components/browse.component";

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
      
      <div className="app-wrapper">
      <Router>
        <NavBar/>
          <Route path="/" exact component={LandingPage} />
          <Route path="/list" exact component={FlashcardSetList} />
          <Route path="/edit/:id" component={EditFlashcardSet} />
          <Route path="/create" component={CreateFlashcardSet} />
          <Route path="/signout" component={SignOut} />
          <Route path= "/user" component={Profile}/>
          <Route path="/flashcardSet/search/:search" exact component={SearchPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/browse" component={Browse} />
          <Route path="/deleteSet/:id" component = {DeleteFlashcardSet}/>
          <Route path="/subject/:subject" component={Subject} />
      </Router>
      <Footer/>
      </div>
    );
  }

  componentDidMount() {
    
  }
}

export default App;
