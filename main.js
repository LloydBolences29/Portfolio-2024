const fruit = [
  "apple",
  "blossom",
  "cherry",
  "greenapple",
  " blueberry",
  "mango",
  "tomato",
];

console.log(fruit);

const favFruit = ["orange"];
console.log(favFruit);

const addFruit = fruit.slice();
fruit[1] = "pineapple";
console.log(fruit);
console.log(addFruit);

const [first, second, third, fourth, ...restElements] = addFruit;
console.log(restElements);

// let newArr [] = fruit
// console.log(fruit)

const fetch_Data = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

console.log(fetch_Data())
