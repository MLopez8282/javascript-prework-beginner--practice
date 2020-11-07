function getColor(selection)
{
	switch(selection){
        case 'red'.toLowerCase():
        return true;
        break;
        case 'green'.toLowerCase():
        return true;
        break;
        case 'blue'.toLowerCase():
        return true;
        break;
    
		// Add more options here
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
