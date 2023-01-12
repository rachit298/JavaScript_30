const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
const name = "hunter";
console.log(`hello i am ${name}`);

// Styled
console.log(
  "%c i am text",
  "font-size:20px; background-color: purple; text-shadow: 10px 10px 0 blue"
);

// warning!
console.warn("oh no!");

// Error :|
console.error("oh no!");

// Info
console.info("humans must drink 3 litres water everyday.");

// Testing
console.assert(1 === 2, "wrong answer");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p); //open up an element on console.

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`Dog's name is ${dog.name}`);
  console.log(`Dog's age is ${dog.age}`);
  console.groupEnd(`${dog.name}`);
});

// counting
//prints count of string simultaneously
console.count("hello");
console.count("hello");
console.count("rainbow");
console.count("rainbow");
console.count("hello");
console.count("hello");
console.count("rainbow");
console.count("hello");
console.count("hello");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/rachit298")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
