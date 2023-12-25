// Compare two JSON having the same properties without order

let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

// As both these JSON have the same properties, both of their Key's should be the same

if(obj1.name === obj2.name & obj1.age === obj2.age){
    console.log("The two JSON are the same!");
}else{
    console.log("The two JSON aren't the same!")
}
