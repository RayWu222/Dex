import React, { Component } from 'react';



export default class SignOut extends Component {

    render() {
        localStorage.clear();
        return (
            <div>
                <h3>SignOut Page</h3>
                <script>
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function ()
                
                </script>
                
            </div>
        )

       
        
    }

}