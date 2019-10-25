import React, { Component } from 'react';
import FirebaseStorageUploader from './firebaseStorageUploader'
import Stock from './stock'

class Counter extends Component {
    state = {  }

    
    render() {  
         var json = {
        "name": "ABACORE CAPITAL",
        "price": {
            "currency": "PHP",
            "amount": 0.86
        },
        "percent_change": -4.44,
        "volume": 25271000,
        "symbol": "ABA"
      }
        return <div><h1>Hello World Counter!</h1> <FirebaseStorageUploader/> <Stock json={json}/></div> ;
    }
}
 
export default Counter;