import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./main.css";


import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SignIn from "./components/signin-pack.component";
import SignOut from "./components/signout.component";
import Profile from "./components/profile.component"


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar> </NavBar>
        <br/>
                <Route path="/" exact component={LandingPage} />
                <Route path="/list" exact component={FlashcardSetList} />
                <Route path="/edit/:id" component={EditFlashcardSet} />
                <Route path="/create" component={CreateFlashcardSet} />
                <Route path="/signout" component={SignOut} />
                <Route path="/signin" component={SignIn} />
                <Route path= "/user" component={Profile}/>
      </Router>
    );
  }
}

export default App;