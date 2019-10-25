import React, { Component } from 'react';

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// https://www.robinwieruch.de/firebase-deploy-react-js
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
   // add your config here
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

class FirebaseStorageUploader extends Component {
    state = {  }
    render() { 
        return <div>
                <button onClick={this.handleDownloadFile} >
                    Download File
                </button>

                <button onClick={this.firestoreAdd} >
                    Sample Firestore add
                </button>
        </div>;
    }

   firestoreAdd = () => { 
    firebase.firestore().collection("baby").doc("testName / resssdadt").set({name:"Mac",age:23})

   } 

    handleDownloadFile = () => {
        // e.preventDefault();
        console.log("handleDownloadFile");
         var filepath = 'uploads/frog.jpeg';
         var storageRef = firebase.storage().ref(filepath);
         storageRef.getDownloadURL().then(function (url) {
           console.log("URL: " + url);
           fetch(url).then(response => {
             response.blob().then(blob => {
               console.log("blob: " + JSON.stringify(blob));
               let url = window.URL.createObjectURL(blob); 
               let a = document.createElement('a'); 
                   a.href = url; 
                   a.download = "frog.jpeg";
                   a.click();
             });
           }).catch(function(error) {
             console.log('There has been a problem with your fetch operation: ' + error.message);
              // ADD THIS THROW error
               throw error;
             });
         });
       }
}
 
export default FirebaseStorageUploader;



//  handleDownloadFile = (e, file) => {
//    e.preventDefault();
//    var filepath = this.state.id + '/' + file['guid']
//    var storageRef = firebase.storage().ref(filepath);
//    storageRef.getDownloadURL().then(function (url) {
//      fetch(url).then(response => {
//        response.blob().then(blob => {
//          let url = window.URL.createObjectURL(blob); let a =
//            document.createElement('a'); a.href = url; a.download =
//              file['filename']; a.click();
//        });
//      });
//    });
//  }