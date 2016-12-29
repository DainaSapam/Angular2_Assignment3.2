//object creation using map
var obj = new Map();

var keyString = "some value",
	keyObj = {},
    keyFunction = function () {};

obj.set(keyString, "value of string");
obj.set(keyObj, "value of object");
obj.set(keyFunctio,"value of function");

//set instance
var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");

mySet.has(1); 
mySet.has(3); 
mySet.has(5);    
mySet.has("Some Text".toLowerCase());


//set iteration
for (let item of mySet) 
  console.log(item);

  
 //string array
var stringArray = ["value1","value2","value3","value4"];
var newSet = new Set(stringArray);

newSet.has("value1"); 
console.log([...newSet]);