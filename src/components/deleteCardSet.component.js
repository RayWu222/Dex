import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteFlashcardSet extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        axios.get('http://localhost:4000/deleteSet/'+this.props.match.params.id)
        .then(response => response.data)
        .catch((error) => {
          console.log(error)
        })

        window.location.replace("http://localhost:3000/user")
    }

   render(){
       return(
           <div>Deleted</div>
       )
   }

   
}