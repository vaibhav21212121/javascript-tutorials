
//  Functions     declaratiuons


function sum(num1,num2){
    console.log(num1+num2);
    
}


sum(100,200);  // call 


// When we assign a    function in a       Variable
//  function erxpressions 


// When we declare a  Function without any N A M E to it 

// called   ANONYMOUS FUNCTION

var  mulOfTwoNumber =  function (num1,num2){
    console.log(num1*num2);
};


mulOfTwoNumber(2,5);


///   JAVASCRIPT IS A SINGLE THREADED LANGUAGE (LINE BY LINE EXECUTION)


//    C A L L B A C K   F U N C T I O N S   //


const doSomething = function(callback){
    console.log("Samose ban rhe hai");
    callback();
    
    setTimeout(function(){},3000)                //3000millisecond equals 3 seconds
}

const callback = function(){
    console.log("Samose ready hai !!!");
}


doSomething(callback);


/////  HIGHER   ORDER  FUNCTION  //////


const radius  = [1,2,3,4];

const area = function(radiusarray){    // Aynshronous function
    const result = [];
    for(let i=0;i<radiusarray.length;i++){
        const a = Math.PI*radiusarray[i]*radiusarray[i];
        result.push(a);
    }
    return result;
};

const ans = area(radius);
console.log(ans);


const circumference = function(radiusarray){    // Aynshronous function
    const result = [];
    for(let i=0;i<radiusarray.length;i++){
        const a = 2*Math.PI*radiusarray[i];
        result.push(a);
    }
    return result;
};

const res = area(radius);
console.log(res); 




///////

const formulaOfArea = function(r){
    return Math.PI*r*r;
}

const calculate = function(radiusArray,formula){
    const result =[];
    for (let i = 0; i < radiusArray.length; i++) {
        const a = formula(radiusArray[i]);
            result.push(a);
        }
        return result;
}

const  ress = calculate(radius,formulaOfArea);
console.log(ress);


