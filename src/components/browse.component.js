import React, { Component } from 'react';
import axios from 'axios';
import { ReactComponent as Logo } from './img/dexOwl.svg';
import { Link } from 'react-router-dom';



const BrowseResult = props => (
    <tr>
        <td>{props.browseResult.flashcardSet_title}</td>
        <td>{props.browseResult.flashcardSet_author}</td>
        <td>{props.browseResult.flashcardSet_description}</td>
        <td>{props.browseResult.flashcardSet_category}</td>
        <td>
            <Link to={"/edit/"+props.browseResult._id}>Edit</Link>
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
            n = value.replace('%20', ' ')
        }
        console.log("value " + n)
       
        //let value = this.props.location.search
        //console.log(`flashcardSet_Title` + value)
        axios.get('http://localhost:4000/flashcardSet/browse/' +  value)
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
            <div>
                <div>
               <strong>Subjects</strong> 
                <ul>
                 <li><a href ="/browse/browse?flashcardSet_category=Math" Math>Math</a></li> 
                 <li><a href ="/browse/browse?flashcardSet_category=Science" Science>Science</a></li> 
                 <li><a href ="/browse/browse?flashcardSet_category=English" English>English</a></li>
                 <li><a href ="/browse/" Search></a></li>
                </ul>
                </div>
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





    

