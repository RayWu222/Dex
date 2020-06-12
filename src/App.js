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
  // state = {
  //   response: '',
  //   post: '',
  //   flashcardSets: []
  // };
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ flashcardSets: res.flashcardSets }))
  //     .catch(err => console.log(err));
  // }
  // callApi = async () => {
  //   const response = await fetch('/list');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
    
  //   return body;
  // };
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
        <Route path="/edit/:id" render={(props) => <EditFlashcardSet {...props} sets={this.flashcardSets} />} />
        <Route path="/create" exact component={CreateFlashcardSet} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <img src={imageURL} />
      </Router>
      
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://f4b62ad4-b3b7-4e2b-bebc-52f69527730a.mock.pstmn.io')
    .then(response => {
      console.log(response.data.message);
      this.setState({imageURL: response.data.message});
    })
    .catch(error => {
      console.log(error)
    });
  }
}

export default App;
