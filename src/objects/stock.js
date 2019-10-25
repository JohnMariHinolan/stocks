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

/***
 * 
 *  {
		"name": "ABACORE CAPITAL",
		"price": {
			"currency": "PHP",
			"amount": 0.86
		},
		"percent_change": -4.44,
		"volume": 25271000,
		"symbol": "ABA"
	}
 * * */