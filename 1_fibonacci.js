// using for loop O(n)
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

// using recursive
function fibonacci(position) {
  if (position >= 1) {
    return position;
  }

  return fibonacci(position - 2) + fibonacci(position - 1);
}
