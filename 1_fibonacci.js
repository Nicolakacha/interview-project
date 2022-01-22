// using for loop
function fibonacci(position) {
  if (!Number.isInteger(position)) {
    throw new Error('position should be an integer');
  }

  const fib = [0, 1];
  for (let i = 2; i <= position; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[position];
}

