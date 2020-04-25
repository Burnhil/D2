let main = () => {

    //set variable to use in do-while
    let numbersUp = 0;
    do {
        //update variable by 1
        numbersUp++
        console.log(numbersUp);
        //checking variable to interate or stop
    }while(numbersUp < 1000);


console.log("##################################");

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};


for (x in person){
    //checking if date field has odd year
    if(x == "birthDate"){
        //set variables to last element and change to number
        let str = person[x];
        let lastElement = parseInt(str.slice(-1));
        //console.log("last postition = "+lastElement);

        //testing if it is odd or even
        if(lastElement % 2 == 0){
            // code here if even
        }else{
            console.log(`The following birthday is off ${person[x]}`);
        }   
    }    
}

console.log("------------------------------------------");
//setting up array
let arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "Mike",
        lastName: "Smith",
        birthDate: "Feb 31, 2000",
        gender: "male"
    },
    {
        firstName: "Bob",
        lastName: "Sanders",
        birthDate: "Sep 5, 1980",
        gender: "male"
    }
];

let otherArray = arrayOfPersons.map((personObj, indexIfNeeded) => {
    let results = personObj;
    return results;
});

//printing array
console.log( otherArray );

console.log( "////////////////////////////////////////////////////" );
// show only male objects
let filteredArray = arrayOfPersons.filter((value, index)=>{ 
    if(value.gender == "male"){ 
        return value;
    }   
});

// show filter array
filteredArray.forEach((value, index)=>{
    console.log(value);
});

console.log("******************************************");
//show only birthdates before jan 1 1990
let filteredArray2 = arrayOfPersons.filter((value, index)=>{
    //setting varialbes to find date
    let strLength =  value.birthDate.length;
    let date = parseInt(value.birthDate.substr(strLength-4, strLength));
    //console.log("date = " + date);

    if(date <= 1990){
        return value.birthDate;
    }

});

// show filterarray2
filteredArray2.forEach((value, index)=>{
    console.log(value);
});



}


main();