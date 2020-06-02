import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


export default class Browse extends Component{


    render(){
        return(
            
                <div>
               <strong>Subjects</strong> 
                <ul>
                 <li><a href ="/subject/browse?flashcardSet_category=Math" Math>Math</a></li> 
                 <li><a href ="/subject/browse?flashcardSet_category=Science" Science>Science</a></li> 
                 <li><a href ="/subject/browse?flashcardSet_category=English" English>English</a></li>
                 <li><a href ="/subject/" Search></a></li>
                </ul>
                </div>
        )
         }
}