// problem 01
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers: number[] = numbers.filter((num) => num % 2 === 0);

// problem 02
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// problem 03
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  } else {
    return "vhul input diyecho tomi";
  }
};

// console.log(checkType("Hello"));
// console.log(checkType(42));

// problem 04
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

console.log(getProperty(user, "name"));

// problem 05
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

// problem 06

// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//   ) {}
// }

// class Student extends Person {
//   constructor(
//     name: string,
//     age: number,
//     public grade: string,
//   ) {
//     super(name, age);
//   }

//   getDetails(): string {
//     return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
//   }
// }

// const student = new Student("Irfan", 26, "A");
// console.log(student.getDetails());

// problem 07

const getIntersection = (num1: number[], num2: number[]): number[] => {
  return num1.filter((num) => num2.includes(num));
};

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
