var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [1,2,3,4],
    significant_other: null
}
var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    family.members[0].lucky_numbers[3] = 23;
    anArray = family.members.lucky_numbers
    for(let i = 0; i < family.members[0].lucky_numbers.length; i++){
        for(let j = 0; j < family.members[1].lucky_numbers.length; j++){
            for(let k=0; k < family.members[2].lucky_numbers.length; k++){
                sumOfAllLuckyNumbers = [i]+ [j] + [k];
            }
        }
    }


  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:



//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 