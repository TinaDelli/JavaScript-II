// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function destinyTwo() {
  const hero = "Hero";
  console.log(`Help us find all our ghosts ${hero}`);
  
  function planets() {
    const ghost = "Last Ghost to Survive";
    console.log(`We have no ${hero} to protect us! Please protect us with ${ghost}`);

    function mission() {
      console.log(`The bad guy wonders how you obtained ${ghost}`);
      console.log(`The planets will forever know you as ${hero}`);
    }// mission
    
    mission();
  }// planets
  
  planets();
}// destinyTwo

destinyTwo();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
return function(){
  return ++count;
}
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter =counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const countObj = {

    increment:function (){
    let count = 0;
    return function(){
      return count += 1;
      }
    },
  
    decrement: function(){
      let count = 0;
      return function(){
        return count -= 1;
      }
    }
  }

  return countObj;
};
let countObject = counterFactory();
let increment=countObject.increment();
let decrement=countObject.decrement();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(decrement());
