// problem 01
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const filterEvenNumbers: number[] = numbers.filter((num) => num % 2 === 0);

console.log(filterEvenNumbers);

// problem 02
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("irfankhan"));
