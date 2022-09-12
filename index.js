// Practice 1 
let userName = 'Cristain221'
const age =  22;

// Practice 2.1 // 2.2  Conditions / if else / Compare

//  (>, <, >=, <=, ==, !=, ===, !==) also (&& and ||)

if(userName === 'Cristain221'){
// console.log('condition worked')
}else{
    // console.log('not matching')
}

// Practice 3 Array
// lenght , index , pop , indexOf , includes |
const arr = [11,22,33,44,55,66];

//Practice 4 Loop
for(let i = 0 ; i < arr.length ; i++){
    // console.log(arr[i]);
}

// Practice 5 Function 
function mywork(a){
const ans =  a + 10;
return ans;
}
// console.log(mywork(10));

// Practice 6 object
const obj = {
    User : "Cristain",
    name : "Sukan",
    age : 22
}
// console.log(obj.name);

/////////////////////////////////////////////////////////////

//////////////// Basic Data Types \\\\\\\\\\\\\\\\\\\\\

// 0.1 string (length, includes, indexOf, toUpperCase, toLowerCase)

// 0.2 number ( integer, float, NaN)

//0.3 True False ( truthy value , falsy value );


// 0.4 null Undefiend



/////////////////// ES6 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Practice 1 Template String (` `)
const aboutMe =  `My Name is ${obj.name} & My Age Is ${obj.age}`




//Practice 2 spread Operator (...) 
const arry = ['cat','dog','elephant','lion','tiger','mouse'];

// 2.1 HoW To make Copy an Arrya 
const newArr =  [...arry];
//2.2 how add element
const newArry1 =  [...arry,100];
//2.3 how to remove Element
const arr2 =  [arry[1],arry[2] , ...arry.slice(4)];




//Practice 3.1 Arrow Function with no perameter
const arro = ()=>{ return 9};
// console.log(arro()) ;

// 3.2 Arrow Function With One Peramiter 
const arro1 = (a)=>{ return a * 12};
// console.log(arro1(2));

// 3.3 Arrow Function With Two Peramiter  
const arro2 = (a,b)=>{
    let sum =  a + b 
    return sum / 4
    };
// console.log(arro2(5,5));

// 3.4 arrow Function with More Line ;
const arro3 = (a,b)=>{
    const frist =   a + 5
    const second =   b + 5
    const multi =  frist * second;
    return multi
}
// console.log(arro3(5,5));


// Practice 4 & 5 (Array and Object destructuring );
const MyFriendAge =  [19,18,20,21,22];
let newObj =  {
    name: 'sukan',
    age : 22,
    pageName : 'Cristain'
}

// 1  array  destructuring
const [a,b,balance] = MyFriendAge;
// console.log(balance);

// 2 object destructuring
const {name} = newObj
// console.log(name);


// Practice 6 function with default peramiter
const arowFun =  (a=1)=>{
    return a * 10
}
// console.log(arowFun());


//Practice 7 optional Chaininng
const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
//   console.log(dogName);


////////////////  Browser API \\\\\\\\\\\\\\\\

// 1 (section Storage, Local Storage )
// 2 (location Api)
// 3 (history Api)


// 4 ( ftech() )
// const uri = 'Url'
// fetch(uri)
// .then(res = res.json())
// .then (data = data);


/// Need To Know More Five

// 1.1 map On An Array
const  ArryForMap = [10,20,30,40,50,60,70,80,90,100];
const newMapedArray =  ArryForMap.map(x=>x*2);
// console.log(newMapedArray)


// 1. 2  (map, forEach, filter, find) Summyre

//// 1 . Map iterat on Every Element And Do works as Condition And return a New Array;

////2 forEach also iterat on Every Element And Do works as Condition But is Do not return any Things;

////3 filter iterat on Every Element And returns the matching Elements

////4 find iterat on Every Element and  returns the only Frist matching Element;



// 2 ternary Operator  এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে
// example
const objc = {
    name : 'sukan',
    age :  22
}
const ag =  obj.name? name : 'no data found';
// console.log(ag);
const ageee =  obj.nam? nam : 'no data found';
// console.log(ageee);


// 3 Logical && /\ ||  basic Knowlage;

// 4 Json  stringify এবং parse

// to convert obj into string Object useing  JSON.stringify
const stringObj =  JSON.stringify(objc);
// console.log(stringObj);

// to convert string object  into normal  Object useing  JSON.parse;
const parseedObject =  JSON.parse(stringObj);
// console.log(parseedObject);

// 5 ( ++, --, +, +'', +=, -= );


// 6 ( Object.keys, Object.values)


//////////////////////////  Dev Tool \\\\\\\\\\\\\\\\\\\\\\\

//  1 Console Tab

//  2 Source Tab

//  3 Application

//  4 Network

//  5 Element


/////////////////////////////////////////////////////////////

/* 
ডাইরেক্ট 

রিএক্ট; 

হবে না, না করলে জাভাস্ক্রিপ্টকে রেসপেক্ট 

এইটাই বাস্তবতা, এইটাই ফ্যাক্ট।

*/
