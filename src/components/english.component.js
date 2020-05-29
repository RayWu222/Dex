import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/dexOwl.svg';
import { Link } from 'react-router-dom';
import Science, { Component } from 'science';

//flash card table componen, to put the result information into the table, such as title/author/description/category
const SearchResult = props => (
    <tr>
        <td>{props.searchResult.flashcardSet_title}</td>
        <td>{props.searchResult.flashcardSet_author}</td>
        <td>{props.searchResult.flashcardSet_description}</td>
        <td>{props.searchResult.flashcardSet_category}</td>
        <td>
            <Link to={"/edit/"+props.searchResult._id}>Edit</Link>
        </td>
    </tr>
)

//perform search with mongoDB by taking the search value submitted by the user
export default class BrowwsPage extends Component{
    
//create an empty array for the table of the search results
constructor(props) {
    super(props);
    this.state = {searchResult: []};
}


//Put the result in a list
searchResultList() {
    return this.state.searchResult.map(function(currentFlashcardSet, i){
        return <SearchResult searchResult={currentFlashcardSet} key={i} />;
    })
}


//return flashcard sets after user input the title of the set they want to search for, and it will return flashcard sets with same name 
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
    axios.get('http://localhost:4000/flashcardSet/search/' + value)
        .then(response => {
            console.log(response.data);
            this.setState({ searchResult: response.data });
            console.log("Search Result " + this.searchResult);
        })
        .catch(function (error){
            console.log(error);
        })
}


render() {
    return (
        <div>
            <h3>English</h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
               
                <tbody>
                    { this.searchResultList() }
                </tbody>
            </table>
        </div>
    )
}
}
