function fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(127));

//dp
let n = 127;
let dp = Array.from({ length: n + 1 }).fill(0);

function fibonacci(n, dp) {
  if (n == 0 || n == 1) {
    return n;
  }

  if(dp[n] !== 0){
    return dp[n];
  }

  dp[n] =  fibonacci(n - 1, dp) + fibonacci(n - 2,dp);
  return dp[n]
}

console.log(fibonacci(n, dp));
