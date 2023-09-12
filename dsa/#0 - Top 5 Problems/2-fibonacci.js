/*
Q2 - Fibonacci Number

Fibonacci Series -> 0, 1, 1, 2, 3, 5, 13, 21, 34, 55, 89, 144, 233...
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2) for n > 1
*/

const fibonacci = (number) => {
    const arr = [0, 1];

    for(let i = 2; i <= number; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr[number];
}

const fibonacciRecursion = (number) => {
  if (number === 0 || number === 1) {
    return number;
  }

  return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
};

console.log(fibonacci(3));
