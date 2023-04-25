const numOne: number = 1;
const numTwo: number = 2;

function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}

add(1, 2);
add(numOne, numTwo);

add();
add(1);
add(3, "4");
add(5, 6, 7);
add("Hello", "TS");
add("Hello TS");
