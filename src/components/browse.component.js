import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/dexOwl.svg';
import { Link } from 'react-router-dom';


export default class Browse extends Component{

    render(){
        return(
            <div>
               <strong>Subjects</strong> 
                <ul>
                 <li><a href ="/browse/math" Math>Math</a></li> 
                 <li><a href ="/create" Science>Science</a></li> 
                 <li><a href ="/list" English>English</a></li>
                 <li><a href ="/search" Search>Search</a></li>
                </ul>



            </div>
                
               
        )
    }
}





    


