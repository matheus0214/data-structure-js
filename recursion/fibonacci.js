function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];

    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
  };

  return fibonacci(n);
}

console.log(fibonacci(5));
console.log(fibonacciMemoization(5));
