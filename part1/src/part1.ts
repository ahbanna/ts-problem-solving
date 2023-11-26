// Problem 1 (Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.)
const calculateLengthOrSquare = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * value;
  } else {
    throw new Error("Invalid input type");
  }
};
const stringLength = calculateLengthOrSquare("Banna");
console.log(`The length of the string is ${stringLength}`); // The length of the string is 5

const squareNumber = calculateLengthOrSquare(6);
console.log(`The square of the given number is ${squareNumber}`); // The square of the given number is 36

// Problem 2 (Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.)
interface Person {
  name: string;
  age: number;
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}

const getAddressCity = (person: Person): string | undefined =>
  person?.address?.city;

const person: Person = {
  name: "Banna",
  age: 30,
  address: {
    city: "Dhaka",
    street: "Fuler Road",
  },
  phone: "01711 000 000",
};

const city = getAddressCity(person);
console.log(city); // Output: Dhaka

// Problem 4 (You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.)
const sumNumbers = (mixedData: (number | string)[]): number => {
  let total = 0;

  for (const item of mixedData) {
    if (typeof item === "number") {
      total += item;
    }
  }
  return total;
};

const mixedDataList: (number | string)[] = [1, "two", 3, "four", 5];
const totalSum: number = sumNumbers(mixedDataList);

console.log(`The sum of the numbers in the given list is ${totalSum}`);

// Problem: 5 (Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.)
interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: string;
}

interface CarAndDriver extends Car, Driver {}

const bothCarAndDriver = (car: Car, driver: Driver): CarAndDriver => {
  return {
    ...car,
    ...driver,
  };
};
const car: Car = {
  make: "BMV",
  model: "X4 M Sports Activity Coupe",
  year: 2023,
};

const driver: Driver = {
  name: "Banna",
  licenseNumber: "001",
};

const combinedObject: CarAndDriver = bothCarAndDriver(car, driver);
console.log(combinedObject);

// Problem 6 (Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.)
const sumOfNumbers = (para: unknown): void => {
  if (
    Array.isArray(para) &&
    para.every((element) => typeof element === "number")
  ) {
    const sum: number = para.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(`The sum of the numbers is ${sum}`);
  } else {
    console.error("It's not array of numbers");
  }
};

const arrayOfNumbers: number[] = [1, 2, 3, 4];
const invalidArray: unknown[] = [1, "two", 3, "four"];

sumOfNumbers(arrayOfNumbers);
sumOfNumbers(invalidArray);

// Problem 7 (Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.)
const findFirstOccurrence = <T>(array: T[], value: T): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

const numbers: number[] = [10, 20, 30, 40, 50, 60];
const strings: string[] = ["Jamal", "Kamal", "Tomal"];

const targetNumber = 60;
const targetString = "Tomal";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
const indexInStrings = findFirstOccurrence(strings, targetString);

console.log(indexInNumbers); // output: 3
console.log(indexInStrings); // output: 2

// Problem 8 (Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.)
interface Product {
  name: string;
  price: number;
  quantity: number;
}

const costCalculation = (products: Product[]): number => {
  let totalCost = 0;

  for (const product of products) {
    totalCost += product.price * product.quantity;
  }
  return totalCost;
};

const products: Product[] = [
  { name: "Shirt", price: 5.5, quantity: 2 },
  { name: "Pant", price: 1.8, quantity: 3 },
];

const totalCost: number = costCalculation(products);

console.log(`The total cost is $${totalCost.toFixed(2)}`);
