

// spread operators


//object/array,  functions, too much used 
//  denote using (...)tripler dot

//duplicate

//make a duplicate array 

const arr =[1,2,3];

const duplicate_array =[...arr , 4,5,6,"Apple","Banana"];  // return new array

console.log(duplicate_array);


// QUestion to merge two array 

const num1 =[1,2,3,4,5];
const num2 =[6,7,8,9,10];

const result = [...num1, ...num2];
console.log(result);



// Spread operator used in Objects 


const obj1 ={
    a:1,
    b:2,
      };

const obj2 = {
    c:"Vaibhav",
    d:"Chitransh" };

const res = {...obj1,  ...obj2};
console.log(res);




//        Function      //

function sum(...numbers){
    let sum =0;
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        sum +=numbers[i];
        
    }return sum 
}

console.log(sum(1,2,3,4,5));


