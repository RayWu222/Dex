import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./main.css";


import NavBar from "./components/navbar.component";

import LandingPage from "./components/landing-page.component";
import CreateFlashcardSet from "./components/create-flashcardset.component";
import EditFlashcardSet from "./components/edit-flashcardset.component";
import FlashcardSetList from "./components/flashcardset-list.component";
import SearchPage from "./components/search.component";
import SignIn from "./components/signup.component";
import SignUp from "./components/signup.component";

import Footer from "./components/footer.component";


import Browse from  "./components/browseLink.component";
import Subject from "./components/browse.component";


class App extends Component {
  render() {
    return (
      
      <div>
      <Router>
        <NavBar> </NavBar>
        <br/>

                <Route path="/" exact component={LandingPage} />
                <Route path="/list" exact component={FlashcardSetList} />
                <Route path="/flashcardSet/search/:search" exact component={SearchPage} />
                <Route path="/edit/:id" component={EditFlashcardSet} />
                <Route path="/create" component={CreateFlashcardSet} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/browse" component={Browse} />
                <Route path="/subject/:subject" component={Subject} />
      </Router>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;