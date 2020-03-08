import React from 'react';
import firebase from '../firebase'

const Test = (props) => {
    function login() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var result = result;
            console.log('result', result);
            // The signed-in user info.
            var user = result.user;
            console.log('user', user);
            // ...


        }).then(() => {
            firebase.auth().currentUser.getIdTokenResult()
                .then((idTokenResult) => {
                    // Confirm the user is an Admin.
                    if (!!idTokenResult.claims.admin) {
                        // Show admin UI.
                        console.log('idTokenResult', idTokenResult.claims.admin);
                        //showAdminUI();
                    } else {
                        console.log('idTokenResult', idTokenResult.claims.admin);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    return (
        <div className="Test">
            <br/>
            <br/>
            <button  onClick={login}>test</button>
        </div>
    );
};

export default Test;
