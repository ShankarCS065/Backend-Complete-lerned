// const fs=require('fs')

// fs.writeFileSync('hello.txt','now  i am android developer')


    /*********Lern java Scripts*********/

//1.

/* var name='shankar';

console.log(name);*/


//2. var use 
/*
var  name='shankar';
var age=20;
var hasHobbies=true;

function summarizeUser(userName, userAge,hasHobbies){
    return ('name is '+userName+
    ',age is '+userAge+
    ',and ths user has Hobbies '+hasHobbies
    );
}

console.log(summarizeUser(name,age,hasHobbies));*/

//3.let use -> it use to modify the our value;
/*
let  name='shankar';
let age=20;
let hasHobbies=true;

age=30;
name='kumar';

function summarizeUser(userName, userAge,hasHobbies){
    return ('name is '+userName+
    ',age is '+userAge+
    ',and ths user has Hobbies '+hasHobbies
    );
}

console.log(summarizeUser(name,age,hasHobbies));*/


//4.const use -> it use to not modify the our value;//run it -> it give error because not modify the const value;
/*
const  name='shankar';
const age=20;
const hasHobbies=true;

age=30;
name='kumar';

function summarizeUser(userName, userAge,hasHobbies){
    return ('name is '+userName+
    ',age is '+userAge+
    ',and ths user has Hobbies '+hasHobbies
    );
}

console.log(summarizeUser(name,age,hasHobbies));*/


//5.uderstandings the arrow functions
//1.
/*let  name='shankar';
let age=20;
let hasHobbies=true;

age=30;
name='kumar';

const summarizeUser=function(userName, userAge,hasHobbies){
    return ('name is '+userName+
    ',age is '+userAge+
    ',and ths user has Hobbies '+hasHobbies
    );
}

console.log(summarizeUser(name,age,hasHobbies));*/

//2.  ->-> both 1. and 2. give same output
/*let  name='shankar';
let age=20;
let hasHobbies=true;

age=30;
name='kumar';

const summarizeUser=(userName, userAge,hasHobbies)=>{
    return ('name is '+userName+
    ',age is '+userAge+
    ',and ths user has Hobbies '+hasHobbies
    );
}

console.log(summarizeUser(name,age,hasHobbies));*/


//6.
// const add=(a,b)=>a+b;
// console.log(add(1,2));

// const addOne=a=>a+1;
// console.log(addOne(1));

// const addRandom=()=>2+3;
// console.log(addRandom());


//7.
/*const person = {
    name:'shankar',
    age: 20
};

console.log(person);*/

//8.
/*const person = {
    name:'shankar',
    age: 20,
    greet(){
        console.log('hi i am',this.name);
    }
};

person.greet();*/


// -> -> Arrays and Array Methods 

// const hobbies[]={'shankar','now',1,true,{}}; //we can use together this
//1.
/*const hobbies=['sports','cooking'];
for(let hobby of hobbies){
    console.log(hobby);
}*/

//2.
/*
const hobbies=['sports','cooking'];
console.log(hobbies.map(hobby=>'Hobby:'+hobby));
console.log(hobbies);*/


//-> Array,object and refrence type
//without changing const we can change the modify the arr
/*
const hobbies=['sports','cooking'];
hobbies.push('programming');
console.log(hobbies);*/


//->-> Understanding Spread and Rest operators

//1. using slice() to copy the array;

/*const hobbies=['sports','cooking'];
const copiedHobbies=hobbies.slice();
console.log(copiedHobbies);*/

//2.different technique to copied the array
//a. this give nested array means give output is ['sports','cooking']
/*const hobbies=['sports','cooking'];
const copiedHobbies=[hobbies];
console.log(copiedHobbies)*/

//b. just using triple dot means ...hobbies than it give same output
// this is use to copied the class of object and array also

/*const hobbies=['sports','cooking'];
const copiedHobbies=[...hobbies];
console.log(copiedHobbies);*/

/*const person = {
    name:'shankar',
    age: 20,
    greet(){
        console.log('hi i am',this.name);
    }
};
const copiedPerson={...person};
console.log(copiedPerson);*/  //-<- this all are spread operators

//now use rest operators
//1.it return all value 1,2,3;
/*const toArray=(arg1,arg2,arg3) =>{
    return[arg1,arg2,arg3];
};
console.log(toArray(1,2,3));*/

//2.it not return all value
/*const toArray=(arg1,arg2,arg3) =>{
    return[arg1,arg2,arg3];
};
console.log(toArray(1,2,3,4));*/
//3.using ...args than there return all values -> it use to merge mutiple array

/*const toArray=(...args) =>{
    return args;
};
console.log(toArray(1,2,3,4));*/


//Destructuring
//1.
/*const person = {
    name:'shankar',
    age: 20,
    greet(){
        console.log('hi i am',this.name);
    }
};

const printName=(personData)=>{
    console.log(personData.name);
}
printName(person);*/

//2.
/*const person = {
    name:'shankar',
    age: 20,
    greet(){
        console.log('hi i am',this.name);
    }
};
const printName=({name,age,greet})=>{
    console.log(name,age,greet);
}
printName(person);*/
//3.
/*const person = {
    name:'shankar',
    age: 20,
    greet(){
        console.log('hi i am',this.name);
    }
};
const printName=({name})=>{
    console.log(name);
}
const{name,age}=person;
console.log(name,age);*/

//4.
/*const hobbies=['sports','cookings'];
const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);*/

//->Async code and promises

//1.
/*
setTimeout(()=>{
    console.log('Timer is done!');
},2000);
console.log('hello');
console.log('hi!');
*/

//2.
/*
const fetchData=callback=>{
    setTimeout(()=>{
        callback('done!');
    },1500);
}
setTimeout(()=>{
    console.log('Timer is done!');
    fetchData(text=>{
        console.log(text);
    });
},2000);
console.log('hello');
console.log('hi!');
*/

//3.
/*
const fetchData=callback=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            callback('done!');
        },1500);
    });
    return promise;
}
setTimeout(()=>{
    console.log('Timer is done!');
    fetchData(text=>{
        console.log(text);
    });
},2000);
console.log('hello');
console.log('hi!');
*/

//4.
/*
const fetchData=()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('done!');
        },1500);
    });
    return promise;
}
setTimeout(()=>{
    console.log('Timer is done!');
    fetchData(text=>{
        console.log(text);
        return fetchData();
    })
    .then(text2=>{
        console.log(text2);
    });
},2000);
console.log('hello');
console.log('hi!');*/


























