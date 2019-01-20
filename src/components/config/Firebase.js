
import React, {Component} from 'react';
import firebase from 'firebase';

class fire extends Component{
  render(){
    
    //contains firebase config object, this for the initilization of firebase
    return
    const config = {
      apiKey: "AIzaSyCsraKEB4ocMNcMvE3uQ9s8nv-lySEbW_c",
      authDomain: "wnsassesment.firebaseapp.com",
      databaseURL: "https://wnsassesment.firebaseio.com",
      projectId: "wnsassesment",
      storageBucket: "wnsassesment.appspot.com",
      messagingSenderId: "197419248372"
    };
    firebase.initializeApp(config);
  
  }
 
}


  
  export default fire;