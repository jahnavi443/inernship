//Declare variables of the following types and assign appropriate values:

let num:number=10;
let str:string="Hello";
let bool:boolean=false;
let tup:number[]=[1,2,3]
let arr:[string,number,boolean]=['Jahnavi',86,true];
enum week{Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday};

console.log(num,str,bool,tup,arr,week)


//function called add that takes two parameters of type number and returns their sum.

function add(x:number,y:number){
    return x+y;
}
console.log("sum is: "+add(2,3))

//function called capitalize that takes a parameter of type string and returns the capitalized version of it.

function cap(str:string){
    return str.toUpperCase()
}

console.log("Capitalized string is:"+cap('hello'))

//Define an interface called Person with the following properties: name of type string  age of type number email of type string

interface Person{
    name:string,
    age:number,
    email:string;
}
//Declare a variable user of type Person and initialize it with sample data.

let user:Person={
    name:'Jahnavi',
    age:22,
    email:'jahnavikolluru36@gmail.com'
}
console.log(user.name);

// Create a class called Car with the following properties:  make of type string model of type string  year of type number

class Car{
    make:string;
    model:string;
    year:number;
    
    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    displayInfo(){             // method displayInfo which logs the information about the car.
        console.log('make:'+this.make);
        console.log('model:'+this.model);
        console.log('year:'+this.year);
    }
}
let info=new Car('Honda','Honda-WR-V',2024);
info.displayInfo()

//Generic function called reverseArray that takes an array of any type and returns a reversed version of that array:
function reverse<a,b,c,d>(v1:a,v2:b,v3:c,v4:d):[d,c,b,a]{
    return [v4,v3,v2,v1];
  }
  console.log(reverse<string,boolean,number,string>("Hi",true,4,"p"));

