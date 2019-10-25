import React, { Component } from 'react';
import "../objects/stock"; // not used
class Stock extends Component {
    state = {  }
    render() { 

         
           var stockVal = new StockObj(this.props.json);
                                            

        return <div><h1>Name: {stockVal.name}</h1> </div> ;
    }

    
}

class StockObj {  
    constructor(json) 
    {
        this.name = json.name;   
        this.amount = json.price.amount;  
        this.currency = json.price.currency;  
        this.percent_change = json.percent_change;  
        this.volume = json.volume;  
        this.symbol = json.symbol;  

    }

}
 
export default Stock;