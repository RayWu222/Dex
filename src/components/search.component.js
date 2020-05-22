import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//flash card table component
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
export default class SearchPage extends Component{
    
//create array for the table of the search results
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

//do something right when you call the route, change the route name to return different value
componentDidMount() {
   
    
    axios.get('http://localhost:4000/flashcardSet/search/English')
        .then(response => {
            console.log(response.data);
            this.setState({ searchResult: response.data });
            console.log("Search Result " + this.searchResult);
        })
        .catch(function (error){
            console.log(error);
        })
}


//Working on the onSubmit Button to take the input user provide and return a list of the FlashCardSetTitle

/*
onSubmit(e) {
    e.preventDefault();

    console.log('Search value submitted');
  
    console.log(`Search Value:${search_value}`);
    var search_value = search_value;
    //console.log('search_value' + search_value)
    
    axios.get('http://localhost:4000/flashcardSet/search/' + search_value)
        .then(response => {
            this.setState({ searchResult: response.data });
            console.log("The search Result data is " + response.data);
    console.log(`Search Value:${this.state.search_value}`);
    var search_value = this.state.search_value;    
    axios.get('http://localhost:4000/search/')
        .then(response => {
            this.setState({ searchResultList: response.data });
            console.log("The search Result data is " + SearchResultList);
        })
        .catch(function (error){
            console.log(error);
        })
}

*/

//working on a button to take user value
render() {
    return (
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
                    { this.searchResultList() }
                </tbody>
            </table>
        </div>
    )
}


/*
render(){
    return(
        <div style = {{marginTop: 10}}>
            <h3>Search</h3>
            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">                   
                    <input type = "text"
                        className = "form-control"
                        value = {this.state.search_value}
                        onChange = {this.onChangeSearchValue}
                        />
                </div>
                <div className = "form-group">
                    <input type = "submit" value = "Search" className = "btn-btn-primary" />

                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="categoryOptions" 
                                        id="categoryTitle" 
                                        value="Title" 
                                        checked={this.state.flashcardSet_category==='Title'} 
                                        onChange={this.onChangeFlashcardSetCategory}
                                        />
                                <label className="form-check-label">Title</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryAuthor" 
                                    value="Author"
                                    checked={this.state.flashcardSet_category==='Author'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Author</label>
                        </div>
                        <div>
                            <h3>Search Result:</h3>
                    
                        
                        </div>
                        
                        
                    </div>
            </form>
            
        </div>

        
    )
}
*/

}

 