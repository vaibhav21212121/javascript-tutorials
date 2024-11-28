// destrcuturing in array 

const array =[1,2,3,4,5];

console.log(array[1]);

const [a,b,c,d,e] =array;
console.log(e);



// Object Destructuring

const person = {
    name:"Vaibhav",
    age:22,
    gender:"Male",
    location:"Punjab"
};


// Acces value     

//Dot notation

console.log(person.gender);

//bracket notation
console.log(person["age"]);

//destructuring 
const {gender} =person;
console.log(gender);

