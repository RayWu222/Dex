import React, { Component } from 'react';
import axios from 'axios';
import { ReactComponent as Logo } from './img/dexOwl.svg';
import { Link } from 'react-router-dom';
import "../App.css";



const BrowseResult = props => (
    <tr>
        <td>{props.browseResult.title}</td>
        <td>{props.browseResult.author}</td>
        <td>{props.browseResult.description}</td>
        <td>{props.browseResult.category}</td>
        <td>
            <Link to={"/edit/"+props.browseResult._id}>Go</Link>
        </td>
    </tr>
)

export default class Browse extends Component{
    constructor(props) {
        super(props);
        this.state = {browseResult: []};
    }
    
    
    //Put the result in a list
    browseResultList() {
        return this.state.browseResult.map(function(currentFlashcardSet, i){
            return <BrowseResult browseResult={currentFlashcardSet} key={i} />;
        })
    }

    
    componentDidMount() {
 
        console.log(JSON.stringify(this.props.location.search))
        let value = JSON.stringify(this.props.location.search);
        var n;
        value = value.split('=').pop();
        value = value.substring(0, value.length-1);
        if(value === ""){
            value = "empty";
        }
        if(value.indexOf('%20') > -1){
            value = value.replace('%20', ' ')
        }
        console.log("value " + n)
       
        //let value = this.props.location.search
        //console.log(`flashcardSet_Title` + value)
        axios.get('http://localhost:4000/subject/' + value )
        //axios.get('http://localhost:4000/flashcardSet/browse/' + value)
            .then(response => {
                console.log(response.data);
                this.setState({ browseResult: response.data });
                console.log("Browse Result " + this.browseResult);
            })
            .catch(function (error){
                console.log(error);
            })
    }
    

    

    render(){
        return(
            <div className="page-container">
               <h1 className="page-title">Subjects</h1> 
                <ul>
                 <li><a href ="/subject/browse?flashcardSet_category=Math" Math>Math</a></li> 
                 <li><a href ="/subject/browse?flashcardSet_category=Science" Science>Science</a></li> 
                 <li><a href ="/subject/browse?flashcardSet_category=English" English>English</a></li>
                 <li><a href ="/browse/" Search></a></li>
                </ul>
                <div>
            <h3>FlashcardSet List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { this.browseResultList() }
                </tbody>
            </table>
        </div>


            </div>
                
               
        )
    }
}





    

