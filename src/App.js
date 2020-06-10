import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import ViewFlashcardSet from "./components/view-flashcardSet.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SearchPage from "./components/search.component";
import SignIn from "./components/signin.component";
import SignUp from "./components/signin.component";
//The main application driver javascript

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar> </NavBar>
        <Route path="/" exact component={LandingPage} />
        <Route path="/list" exact component={FlashcardSetList} />
        <Route
          path="/flashcardSet/search/:search"
          exact
          component={SearchPage}
        />
        <Route path="/edit/:id" component={ViewFlashcardSet} />
        <Route path="/create" exact component={CreateFlashcardSet} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Router>
    );
  }
}

export default App;
