import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./main.css";
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios"
>>>>>>> 148c5b3a062fe1db99f124f549a10e29d5ab3756


import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
<<<<<<< HEAD
import SignIn from "./components/signin-pack.component";
import SignOut from "./components/signout.component";
import Profile from "./components/profile.component"
import DeleteFlashcardSet from "./components/deleteCardSet.component"
=======
import SearchPage from "./components/search.component";
import SignIn from "./components/signin.component";
import SignOut from "./components/signout.component";
import Footer from "./components/footer.component";
>>>>>>> 148c5b3a062fe1db99f124f549a10e29d5ab3756


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
<<<<<<< HEAD
        <NavBar> </NavBar>
        <br/>
                <Route path="/" exact component={LandingPage} />
                <Route path="/list" exact component={FlashcardSetList} />
                <Route path="/edit/:id" component={EditFlashcardSet} />
                <Route path="/create" component={CreateFlashcardSet} />
                <Route path="/signout" component={SignOut} />
                <Route path="/signin" component={SignIn} />
                <Route path= "/user" component={Profile}/>
                <Route path= "/deleteSet/:id" component={DeleteFlashcardSet}/>
=======
        <NavBar/>
        <Route path="/" exact component={LandingPage} />
        <Route path="/list" exact component={FlashcardSetList} />
        <Route path="/flashcardSet/search/:search" exact component={SearchPage} />
        <Route path="/edit/:id" component={EditFlashcardSet} />
        <Route path="/create" component={CreateFlashcardSet} />
        <Route path="/signup" component={SignOut} />
        <Route path="/signin" component={SignIn} />
        <Route path="/browse" component={Browse} />
        <Route path="/subject/:subject" component={Subject} />
>>>>>>> 148c5b3a062fe1db99f124f549a10e29d5ab3756
      </Router>
      <Footer/>
      </div>
    );
  }

  componentDidMount() {
    
  }
}

export default App;
