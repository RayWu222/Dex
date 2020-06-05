import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SearchPage from "./components/search.component";
import SignIn from "./components/signin.component";
import SignOut from "./components/signout.component";


class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <NavBar> </NavBar>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/list" exact component={FlashcardSetList} />
                  <Route path="/flashcardSet/search/:search" exact component={SearchPage} />
                  <Route path="/edit/:id" component={EditFlashcardSet} />
                  <Route path="/create" component={CreateFlashcardSet} />
                  <Route path="/signout" component={SignOut} />
                  <Route path="/signin" component={SignIn} />
        </Router>
        </div>
    );
  }
}

export default App;