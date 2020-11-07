let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    if(guests <= 50){
        return "$4,000";
    }
    else if ( guests >= 50 && guests <= 100){
       return "$10,000";

    }
    else if( guests >= 100 && guests <= 200){
        return "$15,000";
    }
    else(guests > 200)
       return  "$20,000";
    // Your code here
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');